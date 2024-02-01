function func() {
  user = document.getElementById("user").value;
  output = document.getElementById("output");
  loading = document.getElementById("loading");
  loading.classList.remove("invisible");
  loading.classList.add("visible");
  // base_url = "http://localhost:5000/user/?user=";
  base_url = "https://subrata-rudra-leetcode-scrapper.onrender.com/user/?user=";
  final_url = base_url + user;
  fetch(final_url, {
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      // console.log(res);
      loading.classList.remove("visible");
      loading.classList.add("invisible");
      output.innerHTML = "";
      output.classList.remove("invisible");
      output.classList.add("visible");
      output.innerHTML +=
        "<strong>Candidate Name: </strong>" + res.CandidateName;
      output.innerHTML += "<br/>";
      output.innerHTML += "<br/>";
      output.innerHTML +=
        "<strong>LeetCode Username: </strong>" + res.LeetCodeUsername;
      output.innerHTML += "<br/>";
      output.innerHTML += "<br/>";
      output.innerHTML +=
        "<strong>Candidate Rank: </strong>" + res.CandidateRank;
      output.innerHTML += "<br/>";
      output.innerHTML += "<br/>";
      output.innerHTML +=
        "<strong>Contest Attended: </strong>" + res.ContestAttended;
      output.innerHTML += "<br/>";
      output.innerHTML += "<br/>";
      output.innerHTML +=
        "<strong>Contest Rating: </strong>" + res.ContestRating;
      output.innerHTML += "<br/>";
      output.innerHTML += "<br/>";
      output.innerHTML +=
        "<strong>Contest Global Ranking: </strong>" + res.ContestGlobalRanking;
      output.innerHTML += "<br/>";
      output.innerHTML += "<br/>";
      output.innerHTML +=
        "<strong>Total Problems Solved: </strong>" + res.TotalProblemsSolved;
      output.innerHTML += "<br/>";
      output.innerHTML += "<br/>";
      output.innerHTML +=
        "<strong>Easy Problem Solved: </strong>" + res.EasyProblem;
      output.innerHTML += "<br/>";
      output.innerHTML += "<br/>";
      output.innerHTML +=
        "<strong>Medium Problem Solved: </strong>" + res.MediumProblem;
      output.innerHTML += "<br/>";
      output.innerHTML += "<br/>";
      output.innerHTML +=
        "<strong>Hard Problem Solved: </strong>" + res.HardProblem;
      output.innerHTML += "<br/>";
      // output.innerHTML += "<br/>";
      // output.innerHTML += "<strong>Total Submissions: </strong>" + res.TotalSubmissions;
      // output.innerHTML += "<br/>";
      // output.innerHTML += "<br/>";
      // output.innerHTML += "<strong>Total Active Days: </strong>" + res.TotalActiveDays + " Days";
      // output.innerHTML += "<br/>";
      // output.innerHTML += "<br/>";
      // output.innerHTML += "<strong>Max Streak: </strong>" + res.MaxStreak + " Days";
      // output.innerHTML += "<br/>";
      // output.innerHTML += "<br/>";
      // output.innerHTML +=
      //   "<strong>Last 15 Solved Problems: </strong>" + res.Last15SolvedProblems;
      // output.innerHTML += "<br/>";
      output.innerHTML += "<br/>";
      output.innerHTML +=
        "<strong>Topics Covered: </strong>" + res.TopicsCovered;
      output.innerHTML += "<br/>";
      output.innerHTML += "<br/>";
      output.innerHTML +=
        "<strong>Languages Used: </strong>" + res.LanguageUsed;
      output.innerHTML += "<br/>";
      output.innerHTML += "<br/>";
      output.innerHTML += "<strong>Badges Earned: </strong>" + res.BadgesEarned;
      output.innerHTML += "<br/>";
      output.innerHTML += "<br/>";
      output.innerHTML +=
        "<strong>Most Recently Earned LeetCode Badge: </strong>" +
        res.MostRecentlyEarnedBadge;
      // output.innerHTML += "<br/>";
      // output.innerHTML += "<br/>";
      // output.innerHTML += "<strong>Last Solved: </strong>" + res.LastSolved;
    });
}
