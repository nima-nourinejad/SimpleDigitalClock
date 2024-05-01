function ft_hour() {
	let time = new Date()
	let hour = time.getHours()
	 return hour
   }
   function ft_min() {
	 let time = new Date()
	 let min = time.getMinutes()
	 if (min  < 10)
	   min = "0" + min
	 return min
   }
   function ft_sec() {
   let time = new Date()
   let sec = time.getSeconds()
   if (sec < 10)
	 sec = "0" + sec
	return sec
   }
   function checkTime() {
	 let hour = ft_hour()
	 let min = ft_min()
	 let sec = ft_sec()
	 let time = hour + " : " + min + " : " + sec
	 return time
   }
   function printer(elem) {
	 document.getElementById("clock").innerHTML = checkTime()
   }
   setInterval(printer, 10)