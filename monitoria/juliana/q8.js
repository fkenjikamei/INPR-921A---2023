function fat(num) {
    let cont = 0

    for(let c=0; c<num; c++) {
        let nume = num
        let result = nume*num-1
        nume = result
    }

    if(cont<num-2) {
        fat(num)
        cont++
    }
}

fat(32)