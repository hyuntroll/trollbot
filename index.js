var  sentence= [];
var change = [];
change[0] = 2;
change[1] = 3;
change[2] = 11;
change[3] = 12;
let MBTI = [];
let mbti = 0;
let num = 0;
var sum = 0;
var I_E = 1;
var S_N = 1;
var T_F = 1;
var J_P = 1;



sentence[0] = "2. 내가 스트레스를 푸는 방법은 사람들을 만나는 것 이다.";
sentence[1] = "3. 대화를 시작하기보다 맞장구 치는걸 좋아한다.";
sentence[2] = "4. 술자리에서 노는것 보다 집에서 게임하는게 좋다.";
sentence[3] = "5. 업무를 하거나 과제를 할 때 계획을 먼저 세운다.";
sentence[4] = "6. 가끔 번뜩이는 아이디어가 생각나 메모를 하곤 한다.";
sentence[5] = "7. 가끔 비현실적인 망상을 하는 편 이다.";
sentence[6] = "8. 나는 내성적인 성격이다.";
sentence[7] = "9. 상대방의 고민을 들어줄 때 원인을 찾기보다 공감을 해주는 편 이다.";
sentence[8] = "10. 어떤 이유에서건 상대방의 기분을 먼저 생각해야 한다.";
sentence[9] = "11. 다른 사람들이 나를 어떻게 생각하는지 지나치게 생각한다.";
sentence[10] = "12. 영화나 드라마가 뮤지컬이나 예술작품보다 더 많은 영감을 준다.";
sentence[11] = "13. 방 정리가 되어있지 않으면 일을 시작할 수 없다.";
sentence[12] = "14. 과제나 업무는 최대한 미루었다가 한꺼번에 하는 편 이다.";
sentence[13] = "15. 호기심은 나를 움직이는 원동력이다.";
sentence[14] = "16. 프리랜서가 회사원보다 더 나은 삶을 살고 있다고 생각한다.";

function resultMBTI() {
    if (I_E < 0) {
        MBTI[0] = 'I';
    }
    else {
        MBTI[0] = 'E';
    }
    if (S_N < 0) {
        MBTI[1] = 'S';
    }
    else {
        MBTI[1] = 'N';
    }
    if (T_F < 0) {
        MBTI[2] = 'T';
    }
    else {
        MBTI[2] = 'F';
    }
    if (J_P < 0) {
        MBTI[3] = 'J';
    }
    else {
        MBTI[3] = 'P';
    }
    mbti = MBTI[0] + MBTI[1] + MBTI[2] + MBTI[3]
    console.log(mbti);
}

function start() {
    var ch = 0;
    for(i =1; i < 5; i++) {
        let checkbox = document.getElementById('c_' + i);
        if (checkbox.checked == true) {
            ch++;
        } 
    }
    console.log(num);
    if(ch == 1) {
        ch = 0;
        
        for(i =1; i < 5; i++) {
            let checkbox = document.getElementById('c_' + i);
            if (checkbox.checked == true) {
                switch(i) {
                case 1:
                    sum = 3;
                    break;
                case 2:
                    sum = 1;
                    break;
                case 3:
                    sum = -1;
                    break;
                case 4:
                    sum = -3;
                    break;
                }
                for(i = 0; i <= 3; i++) {
                    if(change[i] == num) {
                        if (change[i] == 12)
                        {
                            sum = Math.abs(sum);
                        }
                        else {
                            sum = sum * -1;
                        }
                    }
                 } 
            document.getElementById('c_' + i).checked = false;
        }



    }
    document.getElementById("sentence").innerHTML=sentence[num];
    num++;
    if (num <= 4) {
        I_E += sum;
    }
    else if (num > 4 && num <= 8) {
        S_N += sum;
    }
    else if (num > 8 && num <= 12) {
        T_F += sum;
    }
    else if (num > 12 && num <= 16) {
        J_P += sum;
    }
    for(i =1; i < 5; i++) {
        document.getElementById('c_' + i).checked = false;
    }
    console.log('i_e'+I_E)
    console.log('s_n'+S_N)
    console.log('t_f'+T_F)
    console.log('j_p'+J_P)
    if(num == 16){ 
        resultMBTI();
        alert("당신의 MBTI는 " + mbti + " 입니다.");
        document.getElementById('sentence').innerHTML="당신의 MBTI는 " + mbti + " 입니다.";
         document.getElementById('select').style.display = "none";
    }
    }
    else {
        for(i =1; i < 5; i++) {
            document.getElementById('c_' + i).checked = false;
        }
        alert('하나만 선택해주세요.');
    }

     
}