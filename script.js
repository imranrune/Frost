    // window is reponsisble for current window,eventlistener checks if specific event occurs
    window.addEventListener("load", function() {
    

    /* it finds the the html element named Location id 
    and stores it in variable output */
    const output = document.getElementById("location_text");
    //sets detecting text temporarily 
    output.textContent = "Detecting...";
    
    // navigator.geolocation is the browsers built in gps system
    if(!this.navigator.geolocation) {
            output.textContent = "Geolocation not supported"
            return;
    }

    navigator.geolocation.getCurrentPosition(
        /* async -> await fetch(url) inside, pos -> the postion object from geolocation, 
        asycnc = lets your funciton pause and wait for apis */
        async (pos) => {
            const lat = pos.coords.latitude;
            const lon = pos.coords.longitude;

            // url is a const which says here is my lat,log give me address
            const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`;

            const res = await fetch(url); // initinalizes the url
            // res.json takes server response converts it into javascript code and it is stored, await makes the program wait
            const data = await res.json();
            
            // * address extracts smaller version of address from json file
            const address = data.address; 

            const area = 
                address.suburb ||
                address.neighbourhood ||
                address.village ||
                address.town ||
                address.city ||
                "Unknown"; // return this value if api fails
        
            
            const pincode = address.postcode || "Unkown";
            
            /* the text is wrapped inside `` so you can insert variables in it
            creates final text and places it inside html element 
            This type of syntax is called literal syntax, below line*/

            output.textContent = ` ${area}, ${pincode}`

        }, // closing asycn (pos), which is a parameter inside get currentposition
        () => { // if pos parameter is not used, empty parameter is activaed
            output.textContent = "Location access denied";
        }
    );
});