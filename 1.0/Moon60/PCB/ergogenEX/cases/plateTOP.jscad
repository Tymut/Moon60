function plate_TOPMOUNT_extrude_2_4_outline_fn(){
    return new CSG.Path2D([[141,-8.4339871],[141,25.5]]).appendPoint([105.5,25.5]).appendPoint([105.5,84.4373686]).appendArc([-16.9740616,69],{"radius":154.68,"clockwise":false,"large":false}).appendPoint([-17,69]).appendPoint([-17,-10]).appendArc([-10,-17],{"radius":7,"clockwise":false,"large":false}).appendPoint([16.9249195,-17]).appendArc([20.7398382,-18.1308949],{"radius":7,"clockwise":true,"large":false}).appendPoint([37.2601617,-28.8691051]).appendArc([41.0750805,-30],{"radius":7,"clockwise":false,"large":false}).appendPoint([65.3698541,-30]).appendArc([69.9793863,-31.7319631],{"radius":7,"clockwise":true,"large":false}).appendPoint([74.0206137,-35.2680369]).appendArc([78.6301459,-37],{"radius":7,"clockwise":false,"large":false}).appendPoint([111.9203603,-37]).appendArc([117.2826713,-39.5004866],{"radius":7,"clockwise":true,"large":false}).appendPoint([126.3931191,-50.3578955]).appendArc([136.2549435,-51.2206931],{"radius":7,"clockwise":false,"large":false}).appendPoint([153.4909434,-36.757972]).appendArc([154.353741,-26.8961476],{"radius":7,"clockwise":false,"large":false}).appendPoint([142.637689,-12.9335005]).appendArc([141,-8.4339871],{"radius":7,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    CAG.circle({"center":[48,85],"radius":1.7})
.union(
    CAG.circle({"center":[76,85],"radius":1.7})
).union(
    CAG.circle({"center":[137,22],"radius":1.7})
).union(
    CAG.circle({"center":[148.6700362,-31.0126387],"radius":1.7})
).union(
    CAG.circle({"center":[131.051014,-45.7967538],"radius":1.7})
).union(
    CAG.circle({"center":[78,-32.5],"radius":1.7})
).union(
    CAG.circle({"center":[40,-25.5],"radius":1.7})
).union(
    CAG.circle({"center":[-12.5,-11],"radius":1.7})
).union(
    CAG.circle({"center":[-12.5,66],"radius":1.7})
).union(
    new CSG.Path2D([[106.99,7.99],[121.01,7.99]]).appendPoint([121.01,22.01]).appendPoint([106.99,22.01]).appendPoint([106.99,7.99]).close().innerToCAG()
).union(
    new CSG.Path2D([[81.99,-27.01],[96.01,-27.01]]).appendPoint([96.01,-12.99]).appendPoint([81.99,-12.99]).appendPoint([81.99,-27.01]).close().innerToCAG()
).union(
    new CSG.Path2D([[87.99,11.99],[102.01,11.99]]).appendPoint([102.01,26.01]).appendPoint([87.99,26.01]).appendPoint([87.99,11.99]).close().innerToCAG()
).union(
    new CSG.Path2D([[87.99,-7.01],[102.01,-7.01]]).appendPoint([102.01,7.01]).appendPoint([87.99,7.01]).appendPoint([87.99,-7.01]).close().innerToCAG()
).union(
    new CSG.Path2D([[68.99,-0.01],[83.01,-0.01]]).appendPoint([83.01,14.01]).appendPoint([68.99,14.01]).appendPoint([68.99,-0.01]).close().innerToCAG()
).union(
    new CSG.Path2D([[11.99,11.99],[26.01,11.99]]).appendPoint([26.01,26.01]).appendPoint([11.99,26.01]).appendPoint([11.99,11.99]).close().innerToCAG()
).union(
    new CSG.Path2D([[62.99,-20.01],[77.01,-20.01]]).appendPoint([77.01,-5.99]).appendPoint([62.99,-5.99]).appendPoint([62.99,-20.01]).close().innerToCAG()
).union(
    new CSG.Path2D([[43.99,-20.01],[58.01,-20.01]]).appendPoint([58.01,-5.99]).appendPoint([43.99,-5.99]).appendPoint([43.99,-20.01]).close().innerToCAG()
).union(
    new CSG.Path2D([[87.99,49.99],[102.01,49.99]]).appendPoint([102.01,64.01]).appendPoint([87.99,64.01]).appendPoint([87.99,49.99]).close().innerToCAG()
).union(
    new CSG.Path2D([[87.99,30.99],[102.01,30.99]]).appendPoint([102.01,45.01]).appendPoint([87.99,45.01]).appendPoint([87.99,30.99]).close().innerToCAG()
).union(
    new CSG.Path2D([[68.99,56.99],[83.01,56.99]]).appendPoint([83.01,71.01]).appendPoint([68.99,71.01]).appendPoint([68.99,56.99]).close().innerToCAG()
).union(
    new CSG.Path2D([[68.99,37.99],[83.01,37.99]]).appendPoint([83.01,52.01]).appendPoint([68.99,52.01]).appendPoint([68.99,37.99]).close().innerToCAG()
).union(
    new CSG.Path2D([[68.99,18.99],[83.01,18.99]]).appendPoint([83.01,33.01]).appendPoint([68.99,33.01]).appendPoint([68.99,18.99]).close().innerToCAG()
).union(
    new CSG.Path2D([[49.99,6.99],[64.01,6.99]]).appendPoint([64.01,21.01]).appendPoint([49.99,21.01]).appendPoint([49.99,6.99]).close().innerToCAG()
).union(
    new CSG.Path2D([[30.99,-0.01],[45.01,-0.01]]).appendPoint([45.01,14.01]).appendPoint([30.99,14.01]).appendPoint([30.99,-0.01]).close().innerToCAG()
).union(
    new CSG.Path2D([[11.99,49.99],[26.01,49.99]]).appendPoint([26.01,64.01]).appendPoint([11.99,64.01]).appendPoint([11.99,49.99]).close().innerToCAG()
).union(
    new CSG.Path2D([[11.99,30.99],[26.01,30.99]]).appendPoint([26.01,45.01]).appendPoint([11.99,45.01]).appendPoint([11.99,30.99]).close().innerToCAG()
).union(
    new CSG.Path2D([[11.99,-7.01],[26.01,-7.01]]).appendPoint([26.01,7.01]).appendPoint([11.99,7.01]).appendPoint([11.99,-7.01]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7.01,11.99],[7.01,11.99]]).appendPoint([7.01,26.01]).appendPoint([-7.01,26.01]).appendPoint([-7.01,11.99]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7.01,-7.01],[7.01,-7.01]]).appendPoint([7.01,7.01]).appendPoint([-7.01,7.01]).appendPoint([-7.01,-7.01]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7.01,49.99],[7.01,49.99]]).appendPoint([7.01,64.01]).appendPoint([-7.01,64.01]).appendPoint([-7.01,49.99]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7.01,30.99],[7.01,30.99]]).appendPoint([7.01,45.01]).appendPoint([-7.01,45.01]).appendPoint([-7.01,30.99]).close().innerToCAG()
).union(
    new CSG.Path2D([[49.99,63.99],[64.01,63.99]]).appendPoint([64.01,78.01]).appendPoint([49.99,78.01]).appendPoint([49.99,63.99]).close().innerToCAG()
).union(
    new CSG.Path2D([[49.99,44.99],[64.01,44.99]]).appendPoint([64.01,59.01]).appendPoint([49.99,59.01]).appendPoint([49.99,44.99]).close().innerToCAG()
).union(
    new CSG.Path2D([[49.99,25.99],[64.01,25.99]]).appendPoint([64.01,40.01]).appendPoint([49.99,40.01]).appendPoint([49.99,25.99]).close().innerToCAG()
).union(
    new CSG.Path2D([[30.99,56.99],[45.01,56.99]]).appendPoint([45.01,71.01]).appendPoint([30.99,71.01]).appendPoint([30.99,56.99]).close().innerToCAG()
).union(
    new CSG.Path2D([[30.99,37.99],[45.01,37.99]]).appendPoint([45.01,52.01]).appendPoint([30.99,52.01]).appendPoint([30.99,37.99]).close().innerToCAG()
).union(
    new CSG.Path2D([[30.99,18.99],[45.01,18.99]]).appendPoint([45.01,33.01]).appendPoint([30.99,33.01]).appendPoint([30.99,18.99]).close().innerToCAG()
).union(
    new CSG.Path2D([[104.6842284,-18.3906636],[117.3906636,-24.3157716]]).appendPoint([123.3157716,-11.6093364]).appendPoint([110.6093364,-5.6842284]).appendPoint([104.6842284,-18.3906636]).close().innerToCAG()
).union(
    new CSG.Path2D([[121.9497673,-27.9651103],[130.9616496,-38.7050534]]).appendPoint([141.7015927,-29.6931711]).appendPoint([132.6897104,-18.953228]).appendPoint([121.9497673,-27.9651103]).close().innerToCAG()
)).extrude({ offset: [0, 0, 2.4] });
}




                function plateTOP_case_fn() {
                    

                // creating part 0 of case plateTOP
                let plateTOP__part_0 = plate_TOPMOUNT_extrude_2_4_outline_fn();

                // make sure that rotations are relative
                let plateTOP__part_0_bounds = plateTOP__part_0.getBounds();
                let plateTOP__part_0_x = plateTOP__part_0_bounds[0].x + (plateTOP__part_0_bounds[1].x - plateTOP__part_0_bounds[0].x) / 2
                let plateTOP__part_0_y = plateTOP__part_0_bounds[0].y + (plateTOP__part_0_bounds[1].y - plateTOP__part_0_bounds[0].y) / 2
                plateTOP__part_0 = translate([-plateTOP__part_0_x, -plateTOP__part_0_y, 0], plateTOP__part_0);
                plateTOP__part_0 = rotate([0,0,0], plateTOP__part_0);
                plateTOP__part_0 = translate([plateTOP__part_0_x, plateTOP__part_0_y, 0], plateTOP__part_0);

                plateTOP__part_0 = translate([0,0,0], plateTOP__part_0);
                let result = plateTOP__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return plateTOP_case_fn();
            }

        