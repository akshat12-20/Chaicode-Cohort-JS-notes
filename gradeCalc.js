// 90 >= A
// 80 >= B
// 70 >= C
// 60 >= D
// F

// Factory banani h joki grade ka character return krti h.

//factory template:
function calculateGrade(score){

    if(score>=90){
        return 'A';
    }
    else if (score>=80){
        return 'B';
    }
    else if (score>=70){
        return 'C';
    }
    else if (score>=60){
        return 'D';
    }
    else{
        return 'F';
    }
}

let score = 87; // ram m ek dabba bana.
// Factory ko pyaar se call kiya.
// calculateGrade(score);
let grade = calculateGrade(score);
console.log(grade);

// Ab factory ko chahe kitti bar bhi usse karo/ kitti bar hei pyaar se call karo.
console.log(`garde is: ${calculateGrade(67)}`)