var findMatrix = function(nums) {

    let answer = recursion([], nums);
    return answer;
};

function recursion(results, nums){
    
    //Create an empty array to store unique numbers
    let cumulativeArr = [];
    //Create an empty array to store repeated numbers
    let leftoversArr = [];

    let i=0;
    let arrayLength = nums.length;

    for(i; i<arrayLength; i++){

        if(cumulativeArr.includes(nums[i])){
            leftoversArr.push(nums[i]);
        } else{
            cumulativeArr.push(nums[i]);
        }
    }
    //Results array stores array with unique numbers
    results.push(cumulativeArr);

    if(leftoversArr.length<=0){
        //If leftoversArr length es 0, it means no repeated numbers existed -> return final results
        return results;
    }
    //leftoversArr still has elements, repeat process
    return recursion(results, leftoversArr);
}