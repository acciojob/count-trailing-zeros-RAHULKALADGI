function trailingZeros(n) {
  //your JS code here. If required.
	let num = 1;
	for(let i = 1;i<=n;i++) {
		num*=i;
	}
	let s = num+"";
	let ct = 0;
	for(let i = s.length-1;i>=0;i--) {
		if(s.charAt(i)!='0') {
			return ct;
		}
		ct++;
	}
	return ct;
}

const input = prompt("Enter a number");
alert(trailingZeros(input));
