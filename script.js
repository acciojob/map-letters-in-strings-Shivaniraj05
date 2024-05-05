//your JS code here. If required.
function mapLetters(str) {
	let ans = {};

	for(let i=0; i<str.length; i++){
		if(ans[str[i]]){
			ans[str[i]].push(i);
		}
		else{
			ans[str[i]] = [i];
		}
	}
	
	return ans;
	
}

console.log(mapLetters(str));