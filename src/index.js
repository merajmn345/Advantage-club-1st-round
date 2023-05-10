let library = [
  { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
  { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    libraryID: 3245
  }
];

const sortById = library.sort((a, b) => a.libraryID - b.libraryID);

console.log(sortById);

Object.entries(sortById).map((item) => {
  let key = item[0];
  let value = item[1];
  console.log(key, value);
});

//   Given two strings, return true if they are anagrams of one another
// function solution(text1,text2){
// }

// solution("army","mary") //true
// solution("army","man") //false

// My name is Meraj
// Meraj is name My

// total 3 ques in half hour

// "static void main" must be defined in a public class.
// public class Main {
//   public static void main(String[] args) {
//       Scanner scn = new Scanner(System.in);
//       String s1=scn.nextLine();

//       int n=s1.length();

//       StringBuilder ans = new StringBuilder();

//       for(int i=s1.length()-2; i>=0; i--){
//           if(s1.charAt(i) == ' ' && s1.charAt(i+1) != ' '){
//               ans.append(s1.substring(i+1,n));
//               ans.append(" ");
//           }
//           if(s1.charAt(i) != ' ' && s1.charAt(i+1) == ' '){
//               n=i+1;
//           }
//       }
//       ans.append(s1.substring(0,n));
//       System.out.print(ans.toString());
//   }
// }
