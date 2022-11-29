var arr=[-5,4,6,-3,4,-1];

let max_sum=0;
let cur_sum=0;
for(let p=0; p<arr.length; p++){
cur_sum=cur_sum+arr[p];
if(cur_sum>max_sum){
    max_sum = cur_sum;
}
if(cur_sum<0){
    cur_sum=0;
}
   
}
console.log(max_sum);  //11;