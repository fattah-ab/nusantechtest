function zigZag(s) { 
    // cek kondisi s = positif dan s = 4n - 1 (n adalah positif integer) 
    if ((s + 1) % 4 != 0 || s < 0) {
    return 'Error: S harus bilangan positif dan S harus dapat dinyatakan dalam 4n - 1' 
    }
    // membuat container 
    let maze = '';  
    
    for (let i = 0; i < s; i++) { 
        // bangun tembok paling kiri 
        maze += '@' 
        
        for (let j = 0; j < s - 1; j++) { 
            if (i % 2 == 0) { 
                if ((i % 4 == 0 && j == 0) || (i % 4 != 0 && j == s - 2)) {
                    // menentukan pintu untuk ke jalur berikutnya di kanan atau kiri
                    maze += ' ' 
                } else {
                    // membangun tembok pembatas 
                    maze += '@' 
                }
            } else {
                // membuat jalan
                maze += ' '  
            }
        } 
        // bangun tembok paling kanan dan pindah ke jalur berikutnya
        maze += '@\n'  
        
    } 
    return maze

} 

console.log(zigZag(15));