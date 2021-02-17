const onReload = document.getElementById('body')
onReload.addEventListener('load', reload())

function reload() {
    fetch('https://coronavirus-19-api.herokuapp.com/countries').then(apiData => {
        return apiData.json()
    }).then(currentData => {
        let table = document.getElementById('tableValue')
        for (let i = 1; i < currentData.length; i++) {
            let row = table.insertRow()

            row.insertCell(0)
            table.rows[i].cells[0].innerHTML = currentData[i]['country']
            table.rows[i].cells[0].style.background = '#00ff80'
            table.rows[i].cells[0].style.color = '#000'
            table.rows[i].cells[0].style.fontSize = '20px'

            row.insertCell(1)
            table.rows[i].cells[1].innerHTML = currentData[i]['cases']
            table.rows[i].cells[1].style.background = '#ffff00'
            table.rows[i].cells[1].style.color = '#000'

            row.insertCell(2)
            table.rows[i].cells[2].innerHTML = currentData[i]['todayCases']
            table.rows[i].cells[2].style.background = '	#00ffbf'
            table.rows[i].cells[2].style.color = '	#000'

            row.insertCell(3)
            table.rows[i].cells[3].innerHTML = currentData[i]['deaths']
            table.rows[i].cells[3].style.background = '	#0000ff'
            table.rows[i].cells[3].style.color = '	#fff'

            row.insertCell(4)
            table.rows[i].cells[4].innerHTML = currentData[i]['todayDeaths']
            table.rows[i].cells[4].style.background = '	#ffbf00'

            row.insertCell(5)
            table.rows[i].cells[5].innerHTML = currentData[i]['recovered']
            table.rows[i].cells[5].style.background = '	#ff00ff'

            row.insertCell(6)
            table.rows[i].cells[6].innerHTML = currentData[i]['active']
            table.rows[i].cells[6].style.background = '	#80ff00'

            row.insertCell(7)
            table.rows[i].cells[7].innerHTML = currentData[i]['critical']
            table.rows[i].cells[7].style.background = '	#00bfff'

            row.insertCell(8)
            table.rows[i].cells[8].innerHTML = currentData[i]['casesPerOneMillion']
            table.rows[i].cells[8].style.background = '	#00ff80'

            row.insertCell(9)
            table.rows[i].cells[9].innerHTML = currentData[i]['deathsPerOneMillion']
            table.rows[i].cells[9].style.background = '	#ff0000'
            table.rows[i].cells[9].style.color = '	#fff'

            row.insertCell(10)
            table.rows[i].cells[10].innerHTML = currentData[i]['totalTests']
            table.rows[i].cells[10].style.background = '	#80ff00'

            row.insertCell(11)
            table.rows[i].cells[11].innerHTML = currentData[i]['testsPerOneMillion']
            table.rows[i].cells[11].style.background = '	#00bfff'
            currentData
        }
    })
}