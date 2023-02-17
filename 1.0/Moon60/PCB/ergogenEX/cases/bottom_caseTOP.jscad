function mounting_holesTOPMOUNT_case_extrude_10_9_outline_fn(){
    return CAG.circle({"center":[48,85],"radius":3})
.union(
    CAG.circle({"center":[76,85],"radius":3})
).union(
    CAG.circle({"center":[137,22],"radius":3})
).union(
    CAG.circle({"center":[148.6700362,-31.0126387],"radius":3})
).union(
    CAG.circle({"center":[131.051014,-45.7967538],"radius":3})
).union(
    CAG.circle({"center":[78,-32.5],"radius":3})
).union(
    CAG.circle({"center":[40,-25.5],"radius":3})
).union(
    CAG.circle({"center":[-12.5,-11],"radius":3})
).union(
    CAG.circle({"center":[-12.5,66],"radius":3})
).extrude({ offset: [0, 0, 10.9] });
}


function screw_holesTOPMOUNT_extrude_10_9_outline_fn(){
    return CAG.circle({"center":[48,85],"radius":1.7})
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
).extrude({ offset: [0, 0, 10.9] });
}


function frame_case_default_offset_extrude_3_outline_fn(){
    return new CSG.Path2D([[-16.9740616,69.5],[-17.5,69.5]]).appendPoint([-17.5,-10.5]).appendArc([-10.5,-17.5],{"radius":7,"clockwise":false,"large":false}).appendPoint([16.6749195,-17.5]).appendArc([20.4898382,-18.6308949],{"radius":7,"clockwise":true,"large":false}).appendPoint([37.0101617,-29.3691051]).appendArc([40.8250805,-30.5],{"radius":7,"clockwise":false,"large":false}).appendPoint([65.1198541,-30.5]).appendArc([69.7293863,-32.2319631],{"radius":7,"clockwise":true,"large":false}).appendPoint([73.7706137,-35.7680369]).appendArc([78.3801459,-37.5],{"radius":7,"clockwise":false,"large":false}).appendPoint([111.6872064,-37.5]).appendArc([117.0495174,-40.0004866],{"radius":7,"clockwise":true,"large":false}).appendPoint([126.3314906,-51.0623115]).appendArc([136.193315,-51.9251091],{"radius":7,"clockwise":false,"large":false}).appendPoint([154.1953595,-36.8196004]).appendArc([155.0581571,-26.957776],{"radius":7,"clockwise":false,"large":false}).appendPoint([143.137689,-12.7515153]).appendArc([141.5,-8.2520019],{"radius":7,"clockwise":true,"large":false}).appendPoint([141.5,69.5]).appendPoint([140.9740616,69.5]).appendArc([-16.9740616,69.5],{"radius":154.68,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 3] });
}


function bottom_case_walls_extrude_12_5_outline_fn(){
    return new CSG.Path2D([[-22,67.3],[-22,-15]]).appendArc([-15,-22],{"radius":7,"clockwise":false,"large":false}).appendPoint([14.4249195,-22]).appendArc([18.2398382,-23.1308949],{"radius":7,"clockwise":true,"large":false}).appendPoint([34.7601617,-33.8691051]).appendArc([38.5750805,-35],{"radius":7,"clockwise":false,"large":false}).appendPoint([62.8698541,-35]).appendArc([67.4793863,-36.7319631],{"radius":7,"clockwise":true,"large":false}).appendPoint([71.5206137,-40.2680369]).appendArc([76.1301459,-42],{"radius":7,"clockwise":false,"large":false}).appendPoint([109.5888219,-42]).appendArc([114.9511329,-44.5004866],{"radius":7,"clockwise":true,"large":false}).appendPoint([125.7768349,-57.4020558]).appendArc([135.6386593,-58.2648534],{"radius":7,"clockwise":false,"large":false}).appendPoint([160.5351037,-37.3742561]).appendArc([161.3979013,-27.5124317],{"radius":7,"clockwise":false,"large":false}).appendPoint([147.637689,-11.1136492]).appendArc([146,-6.6141358],{"radius":7,"clockwise":true,"large":false}).appendPoint([146,67.3]).appendArc([140.9217821,74.0310292],{"radius":7,"clockwise":false,"large":false}).appendArc([-16.9217821,74.0310291],{"radius":154.68,"clockwise":false,"large":false}).appendArc([-22,67.3],{"radius":7,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[-16.9740616,69.5],[-17.5,69.5]]).appendPoint([-17.5,-10.5]).appendArc([-10.5,-17.5],{"radius":7,"clockwise":false,"large":false}).appendPoint([16.6749195,-17.5]).appendArc([20.4898382,-18.6308949],{"radius":7,"clockwise":true,"large":false}).appendPoint([37.0101617,-29.3691051]).appendArc([40.8250805,-30.5],{"radius":7,"clockwise":false,"large":false}).appendPoint([65.1198541,-30.5]).appendArc([69.7293863,-32.2319631],{"radius":7,"clockwise":true,"large":false}).appendPoint([73.7706137,-35.7680369]).appendArc([78.3801459,-37.5],{"radius":7,"clockwise":false,"large":false}).appendPoint([111.6872064,-37.5]).appendArc([117.0495174,-40.0004866],{"radius":7,"clockwise":true,"large":false}).appendPoint([126.3314906,-51.0623115]).appendArc([136.193315,-51.9251091],{"radius":7,"clockwise":false,"large":false}).appendPoint([154.1953595,-36.8196004]).appendArc([155.0581571,-26.957776],{"radius":7,"clockwise":false,"large":false}).appendPoint([143.137689,-12.7515153]).appendArc([141.5,-8.2520019],{"radius":7,"clockwise":true,"large":false}).appendPoint([141.5,69.5]).appendPoint([140.9740616,69.5]).appendArc([-16.9740616,69.5],{"radius":154.68,"clockwise":false,"large":false}).close().innerToCAG()
).extrude({ offset: [0, 0, 12.5] });
}




                function bottom_caseTOP_case_fn() {
                    

                // creating part 0 of case bottom_caseTOP
                let bottom_caseTOP__part_0 = mounting_holesTOPMOUNT_case_extrude_10_9_outline_fn();

                // make sure that rotations are relative
                let bottom_caseTOP__part_0_bounds = bottom_caseTOP__part_0.getBounds();
                let bottom_caseTOP__part_0_x = bottom_caseTOP__part_0_bounds[0].x + (bottom_caseTOP__part_0_bounds[1].x - bottom_caseTOP__part_0_bounds[0].x) / 2
                let bottom_caseTOP__part_0_y = bottom_caseTOP__part_0_bounds[0].y + (bottom_caseTOP__part_0_bounds[1].y - bottom_caseTOP__part_0_bounds[0].y) / 2
                bottom_caseTOP__part_0 = translate([-bottom_caseTOP__part_0_x, -bottom_caseTOP__part_0_y, 0], bottom_caseTOP__part_0);
                bottom_caseTOP__part_0 = rotate([0,0,0], bottom_caseTOP__part_0);
                bottom_caseTOP__part_0 = translate([bottom_caseTOP__part_0_x, bottom_caseTOP__part_0_y, 0], bottom_caseTOP__part_0);

                bottom_caseTOP__part_0 = translate([0,0,0], bottom_caseTOP__part_0);
                let result = bottom_caseTOP__part_0;
                
            

                // creating part 1 of case bottom_caseTOP
                let bottom_caseTOP__part_1 = screw_holesTOPMOUNT_extrude_10_9_outline_fn();

                // make sure that rotations are relative
                let bottom_caseTOP__part_1_bounds = bottom_caseTOP__part_1.getBounds();
                let bottom_caseTOP__part_1_x = bottom_caseTOP__part_1_bounds[0].x + (bottom_caseTOP__part_1_bounds[1].x - bottom_caseTOP__part_1_bounds[0].x) / 2
                let bottom_caseTOP__part_1_y = bottom_caseTOP__part_1_bounds[0].y + (bottom_caseTOP__part_1_bounds[1].y - bottom_caseTOP__part_1_bounds[0].y) / 2
                bottom_caseTOP__part_1 = translate([-bottom_caseTOP__part_1_x, -bottom_caseTOP__part_1_y, 0], bottom_caseTOP__part_1);
                bottom_caseTOP__part_1 = rotate([0,0,0], bottom_caseTOP__part_1);
                bottom_caseTOP__part_1 = translate([bottom_caseTOP__part_1_x, bottom_caseTOP__part_1_y, 0], bottom_caseTOP__part_1);

                bottom_caseTOP__part_1 = translate([0,0,0], bottom_caseTOP__part_1);
                result = result.subtract(bottom_caseTOP__part_1);
                
            

                // creating part 2 of case bottom_caseTOP
                let bottom_caseTOP__part_2 = frame_case_default_offset_extrude_3_outline_fn();

                // make sure that rotations are relative
                let bottom_caseTOP__part_2_bounds = bottom_caseTOP__part_2.getBounds();
                let bottom_caseTOP__part_2_x = bottom_caseTOP__part_2_bounds[0].x + (bottom_caseTOP__part_2_bounds[1].x - bottom_caseTOP__part_2_bounds[0].x) / 2
                let bottom_caseTOP__part_2_y = bottom_caseTOP__part_2_bounds[0].y + (bottom_caseTOP__part_2_bounds[1].y - bottom_caseTOP__part_2_bounds[0].y) / 2
                bottom_caseTOP__part_2 = translate([-bottom_caseTOP__part_2_x, -bottom_caseTOP__part_2_y, 0], bottom_caseTOP__part_2);
                bottom_caseTOP__part_2 = rotate([0,0,0], bottom_caseTOP__part_2);
                bottom_caseTOP__part_2 = translate([bottom_caseTOP__part_2_x, bottom_caseTOP__part_2_y, 0], bottom_caseTOP__part_2);

                bottom_caseTOP__part_2 = translate([0,0,0], bottom_caseTOP__part_2);
                result = result.union(bottom_caseTOP__part_2);
                
            

                // creating part 3 of case bottom_caseTOP
                let bottom_caseTOP__part_3 = bottom_case_walls_extrude_12_5_outline_fn();

                // make sure that rotations are relative
                let bottom_caseTOP__part_3_bounds = bottom_caseTOP__part_3.getBounds();
                let bottom_caseTOP__part_3_x = bottom_caseTOP__part_3_bounds[0].x + (bottom_caseTOP__part_3_bounds[1].x - bottom_caseTOP__part_3_bounds[0].x) / 2
                let bottom_caseTOP__part_3_y = bottom_caseTOP__part_3_bounds[0].y + (bottom_caseTOP__part_3_bounds[1].y - bottom_caseTOP__part_3_bounds[0].y) / 2
                bottom_caseTOP__part_3 = translate([-bottom_caseTOP__part_3_x, -bottom_caseTOP__part_3_y, 0], bottom_caseTOP__part_3);
                bottom_caseTOP__part_3 = rotate([0,0,0], bottom_caseTOP__part_3);
                bottom_caseTOP__part_3 = translate([bottom_caseTOP__part_3_x, bottom_caseTOP__part_3_y, 0], bottom_caseTOP__part_3);

                bottom_caseTOP__part_3 = translate([0,0,0], bottom_caseTOP__part_3);
                result = result.union(bottom_caseTOP__part_3);
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottom_caseTOP_case_fn();
            }

        