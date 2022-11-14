function TwoSum(nums, target){
 for(let p=0; p<nums.length; p++){
    for(let q=p+1; q<nums.length; q++){
         if(nums[p]+nums[q]==target){
            return[p,q];
         }
    }
 }
}

// time_complexity: o(n);
// space_complexity: o(n);
