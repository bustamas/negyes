var cardArray= [];
var idArray = ['#card01', '#card02','#card03', '#card04',
    '#card05', '#card06', '#card07', '#card09', '#card09',
    '#card10', '#card11', '#card12', '#card13', '#card14', '#card15', '#card16'
]
var content = [ 'A', 'C', 'B','A',
                'G', 'E', 'C', 'G',
                'B', 'D', 'D', 'F',
                'F', 'H', 'E', 'H'
            ]
for( let i=0; i<16; i++){
    const card = document.querySelector(idArray[i])
        card.addEventListener('click',()=>(
            console.log("müködés1")
        ))
        cardArray.push(card);
}


