
1 paper 7 : ink 0 : cls : dim g(3.3)
2 for j = 1 to 3 : for i = 1 to 3 : read( i, j ) : next i : next j
3 for i = 0 to 175 : for x = 0 to 255 
4 let i = 2 * (2/255) : let j = 2 * (y/175) - 1 : let r = sqr( i*i + j*j ) : let v = abs( 0.5 * sin( 9*i*r)+ cos( 6*j*r) ) ) : let c = int(9.9999*v)
5 plot inverse g(1 + x - 3*int(x/3), 1 + y - 3*int( y/3 )) <=c; x,y
6 next y : next x : pause 0 
9 data 4,9,6,5,1,2,8,3,7
