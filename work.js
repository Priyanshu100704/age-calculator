         function calculateAge() {
            let dob = document.getElementById("dob").value;

            if (!dob) {
                document.getElementById("result").innerHTML = "Please select a valid date.";
                return;
            }

            let birthDate = new Date(dob);
            let today = new Date();

            let years = today.getFullYear() - birthDate.getFullYear();
            let months = today.getMonth() - birthDate.getMonth();
            let days = today.getDate() - birthDate.getDate();

            // Adjust months and years if needed
            if (days < 0) {
                months--;
                let prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
                days += prevMonth.getDate();
            }

            if (months < 0) {
                years--;
                months += 12;
            }

            document.getElementById("result").innerHTML = 
                `You are ${years} years, ${months} months, and ${days} days old.`;
        }
