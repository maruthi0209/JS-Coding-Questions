/*
Group Anagrams
       ["eat", "tea", "tan", "ate", "nat", "bat"] → [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
Write a function to group anagrams from an array of strings.
 */

function groupAnagrams(arr) {
    let ana = []
    for(let i=0; i<arr.length; i++) {
        let el = [arr[i]]
        for(let j=i+1; j<arr.length; j++) {
            let count=0;
            for(ele of arr[i].split('')) {
                if(arr[j].split('').includes(ele)) {
                    count++
                }
            }
            if(count==3) {
                el.push(arr[j])
            }
        }
        if(!ana.flat().includes(arr[i])) {
            ana.push(el)
        }
    }
    return ana
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))