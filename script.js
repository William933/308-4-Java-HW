//308.3 CSV data
//Part 1 I would create multiple arrays 
//ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26


//Part 2
let matrix = {data:[["ID", "Name", "Occupation", "Age"],
               [42, "Bruce", "Knight", 41],
               [57, "Bob", "Fry Cook", 19],
               [63, "Blaine","Quiz Master",58],
               [98, "Bill", "Doctor's Assistant", 26,]
]};

console.log(matrix)
////////////////

///Part 3 nested for loops

const filter=matrix.filter

const items= matrix
.filter(n => n >=  0)
.map(n => ({value: n }))
.filter (obj => (obj.value > 3))
.map(obj => obj.value);
ffilter =

console.log(items)
    







