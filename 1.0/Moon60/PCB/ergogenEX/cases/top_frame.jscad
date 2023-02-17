function bottom_case_walls_extrude_12_5_outline_fn(){
    return new CSG.Path2D([[-22,67.3],[-22,-15]]).appendArc([-15,-22],{"radius":7,"clockwise":false,"large":false}).appendPoint([14.4249195,-22]).appendArc([18.2398382,-23.1308949],{"radius":7,"clockwise":true,"large":false}).appendPoint([34.7601617,-33.8691051]).appendArc([38.5750805,-35],{"radius":7,"clockwise":false,"large":false}).appendPoint([62.8698541,-35]).appendArc([67.4793863,-36.7319631],{"radius":7,"clockwise":true,"large":false}).appendPoint([71.5206137,-40.2680369]).appendArc([76.1301459,-42],{"radius":7,"clockwise":false,"large":false}).appendPoint([109.5888219,-42]).appendArc([114.9511329,-44.5004866],{"radius":7,"clockwise":true,"large":false}).appendPoint([125.7768349,-57.4020558]).appendArc([135.6386593,-58.2648534],{"radius":7,"clockwise":false,"large":false}).appendPoint([160.5351037,-37.3742561]).appendArc([161.3979013,-27.5124317],{"radius":7,"clockwise":false,"large":false}).appendPoint([147.637689,-11.1136492]).appendArc([146,-6.6141358],{"radius":7,"clockwise":true,"large":false}).appendPoint([146,67.3]).appendArc([140.9217821,74.0310292],{"radius":7,"clockwise":false,"large":false}).appendArc([-16.9217821,74.0310291],{"radius":154.68,"clockwise":false,"large":false}).appendArc([-22,67.3],{"radius":7,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[-16.9740616,69.5],[-17.5,69.5]]).appendPoint([-17.5,-10.5]).appendArc([-10.5,-17.5],{"radius":7,"clockwise":false,"large":false}).appendPoint([16.6749195,-17.5]).appendArc([20.4898382,-18.6308949],{"radius":7,"clockwise":true,"large":false}).appendPoint([37.0101617,-29.3691051]).appendArc([40.8250805,-30.5],{"radius":7,"clockwise":false,"large":false}).appendPoint([65.1198541,-30.5]).appendArc([69.7293863,-32.2319631],{"radius":7,"clockwise":true,"large":false}).appendPoint([73.7706137,-35.7680369]).appendArc([78.3801459,-37.5],{"radius":7,"clockwise":false,"large":false}).appendPoint([111.6872064,-37.5]).appendArc([117.0495174,-40.0004866],{"radius":7,"clockwise":true,"large":false}).appendPoint([126.3314906,-51.0623115]).appendArc([136.193315,-51.9251091],{"radius":7,"clockwise":false,"large":false}).appendPoint([154.1953595,-36.8196004]).appendArc([155.0581571,-26.957776],{"radius":7,"clockwise":false,"large":false}).appendPoint([143.137689,-12.7515153]).appendArc([141.5,-8.2520019],{"radius":7,"clockwise":true,"large":false}).appendPoint([141.5,69.5]).appendPoint([140.9740616,69.5]).appendArc([-16.9740616,69.5],{"radius":154.68,"clockwise":false,"large":false}).close().innerToCAG()
).extrude({ offset: [0, 0, 12.5] });
}


function top_frame_extrude_4_outline_fn(){
    return new CSG.Path2D([[-22,67.3],[-22,-15]]).appendArc([-15,-22],{"radius":7,"clockwise":false,"large":false}).appendPoint([14.4249195,-22]).appendArc([18.2398382,-23.1308949],{"radius":7,"clockwise":true,"large":false}).appendPoint([34.7601617,-33.8691051]).appendArc([38.5750805,-35],{"radius":7,"clockwise":false,"large":false}).appendPoint([62.8698541,-35]).appendArc([67.4793863,-36.7319631],{"radius":7,"clockwise":true,"large":false}).appendPoint([71.5206137,-40.2680369]).appendArc([76.1301459,-42],{"radius":7,"clockwise":false,"large":false}).appendPoint([109.5888219,-42]).appendArc([114.9511329,-44.5004866],{"radius":7,"clockwise":true,"large":false}).appendPoint([125.7768349,-57.4020558]).appendArc([135.6386593,-58.2648534],{"radius":7,"clockwise":false,"large":false}).appendPoint([160.5351037,-37.3742561]).appendArc([161.3979013,-27.5124317],{"radius":7,"clockwise":false,"large":false}).appendPoint([147.637689,-11.1136492]).appendArc([146,-6.6141358],{"radius":7,"clockwise":true,"large":false}).appendPoint([146,67.3]).appendArc([140.9217821,74.0310292],{"radius":7,"clockwise":false,"large":false}).appendArc([-16.9217821,74.0310291],{"radius":154.68,"clockwise":false,"large":false}).appendArc([-22,67.3],{"radius":7,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[107.5,27.75],[127.5,27.75]]).appendPoint([127.5,70.75]).appendPoint([107.5,70.75]).appendPoint([107.5,27.75]).close().innerToCAG()
.union(
    new CSG.Path2D([[100.7107395,-19.8368953],[117.9854361,-27.8922185]]).appendPoint([130.5931117,-42.9174612]).appendPoint([145.9140005,-30.061709]).appendPoint([133.0582483,-14.7408202]).appendPoint([120.0742932,-25.6356522]).appendPoint([127.2892605,-10.1631047]).appendPoint([109.1631047,-1.7107395]).appendPoint([100.7107395,-19.8368953]).close().innerToCAG()
).union(
    new CSG.Path2D([[-10,-10],[29,-10]]).appendPoint([29,-3]).appendPoint([41,-3]).appendPoint([41,-23]).appendPoint([79,-23]).appendPoint([79,-30]).appendPoint([99,-30]).appendPoint([99,-10]).appendPoint([105,-10]).appendPoint([105,5]).appendPoint([124,5]).appendPoint([124,25]).appendPoint([105,25]).appendPoint([105,67]).appendPoint([86,67]).appendPoint([86,74]).appendPoint([67,74]).appendPoint([67,81]).appendPoint([47,81]).appendPoint([47,74]).appendPoint([28,74]).appendPoint([28,67]).appendPoint([-10,67]).appendPoint([-10,-10]).close().innerToCAG()
)).extrude({ offset: [0, 0, 4] });
}




                function top_frame_case_fn() {
                    

                // creating part 0 of case top_frame
                let top_frame__part_0 = bottom_case_walls_extrude_12_5_outline_fn();

                // make sure that rotations are relative
                let top_frame__part_0_bounds = top_frame__part_0.getBounds();
                let top_frame__part_0_x = top_frame__part_0_bounds[0].x + (top_frame__part_0_bounds[1].x - top_frame__part_0_bounds[0].x) / 2
                let top_frame__part_0_y = top_frame__part_0_bounds[0].y + (top_frame__part_0_bounds[1].y - top_frame__part_0_bounds[0].y) / 2
                top_frame__part_0 = translate([-top_frame__part_0_x, -top_frame__part_0_y, 0], top_frame__part_0);
                top_frame__part_0 = rotate([0,0,0], top_frame__part_0);
                top_frame__part_0 = translate([top_frame__part_0_x, top_frame__part_0_y, 0], top_frame__part_0);

                top_frame__part_0 = translate([0,0,0], top_frame__part_0);
                let result = top_frame__part_0;
                
            

                // creating part 1 of case top_frame
                let top_frame__part_1 = top_frame_extrude_4_outline_fn();

                // make sure that rotations are relative
                let top_frame__part_1_bounds = top_frame__part_1.getBounds();
                let top_frame__part_1_x = top_frame__part_1_bounds[0].x + (top_frame__part_1_bounds[1].x - top_frame__part_1_bounds[0].x) / 2
                let top_frame__part_1_y = top_frame__part_1_bounds[0].y + (top_frame__part_1_bounds[1].y - top_frame__part_1_bounds[0].y) / 2
                top_frame__part_1 = translate([-top_frame__part_1_x, -top_frame__part_1_y, 0], top_frame__part_1);
                top_frame__part_1 = rotate([0,0,0], top_frame__part_1);
                top_frame__part_1 = translate([top_frame__part_1_x, top_frame__part_1_y, 0], top_frame__part_1);

                top_frame__part_1 = translate([0,0,0], top_frame__part_1);
                result = result.union(top_frame__part_1);
                
            
                    return result;
                }
            
            
        
            function main() {
                return top_frame_case_fn();
            }

        