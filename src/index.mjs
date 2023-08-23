import "./styles.css";

const sentence="Sukdip is a Frontend developer";
const words=["Front","Suk",'end'];
const set=new Set(words);
const highlightWords=(str,words)=>{
  const sentencearray = sentence.split(" ");
  const newArray=sentencearray.map((word) => {
    let output="";
    if(set.has(word)){
      output=`<strong>${word}</strong>`;
    } else {
      for(let i=0;i<word.length;i++){
        const prefix=word.slice(0,i+1);
        const suffix=word.slice(i+1);
        if(set.has(prefix) && set.has(suffix)){
          output= `<strong>${prefix+suffix}</strong>`;
        } else if(set.has(word.slice(0,i+1))){
          output =`<strong>${prefix}</strong>${suffix}`;
        } else if(set.has(word.slice(i+1))){
        output= `${prefix}<strong>${suffix}</strong>`;
        }
      }
    }
    return output!==''? output:word;
  });
  return newArray.join(" ");
}

const modifiedSentence=highlightWords(sentence,words);
document.getElementById("app").innerHTML=modifiedSentence;
console.log(modifiedSentence);