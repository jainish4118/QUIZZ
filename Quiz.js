const handleclick = () => { 
    let score = 0;

    let ans = { q1: 'A', q2: 'A', q3: 'B', q4: 'B', q5: 'C', q6: 'C', q7: 'A', q8: 'A', q9: 'B', q10: 'B' };

   for (let i = 1; i <= 10; i++) {
        let selected = document.getElementsByName(`q${i}`);
        
        for (let j = 0; j < selected.length; j++) {
            if (selected[j].checked) {
                if (selected[j].value === ans[`q${i}`]) {
                    score++;
                }
                break; 
            }
        }
    }

    alert(`You scored ${score} out of 10`);
}