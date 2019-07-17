
window.onload = function(){ 

    var div = d3.select("body").append("div").attr("class","tooltip").style("opacity",0);

    svgCanvas = d3.selectAll("svg")
    .attr("width", 1420)
    .attr("height", 600)
    .attr("class", "svgCanvas");

    d3.json("data.json", function(d){

            node_d = d.nodes
            link_d = d.links
            var max_amount = 0

            var list = [];
            var count = 0;
            for (i in link_d){
                var dict = new Object();
                count = count + 1
                dict["count"] = count;
                dict["node01"] = link_d[i]["node01"]
                dict["node02"] = link_d[i]["node02"]
                dict["amount"] = link_d[i]["amount"]
                for (j in node_d){
                    if( link_d[i]["node01"] == node_d[j]["id"]){
                        dict["origin_x"] = node_d[j]["x"]
                        dict["origin_y"] = node_d[j]["y"]
                    }
                    if( link_d[i]["node02"] == node_d[j]["id"]){
                        dict["dest_x"] = node_d[j]["x"]
                        dict["dest_y"] = node_d[j]["y"]
                    }
                }
                list.push(dict)
            }
            

            var count_match = new Object();
            for(each in node_d){
                var count_li = [];
                for (each2 in list){
                    if(node_d[each]["id"] == list[each2]["node01"] || node_d[each]["id"] == list[each2]["node02"]){
                        count_li.push(list[each2]["count"])
                    }
                }
                count_match[node_d[each]["id"]] = count_li;
            }
            console.log(count_match)
            
            for (i in list){
                total_amount = 0
                adjacent = 0
                node01 = list[i]["node01"]
                node02 = list[i]["node02"]
                    for (j in list){
                        node01_2 = list[j]["node01"]
                        node02_2 = list[j]["node02"]

                        if(node01 == node01_2){
                            total_amount = total_amount + list[j]["amount"]
                            adjacent = adjacent + 1
                        }
                        if(node01 == node02_2){
                            total_amount = total_amount + list[j]["amount"]
                            adjacent = adjacent + 1
                        }
                    }
                    list[i]["total_amount"] = total_amount
                    list[i]["adjacent"] = adjacent
                    if(total_amount > max_amount){
                        max_amount = total_amount;
                    }
            }


            var missing = []
            for (each in node_d){
                count = 0
                for (each2 in list){       
                    if(node_d[each]["id"] == list[each2]["node01"]){
                        count +=1
                    }
                }
                if(count == 0){
                    missing.push(node_d[each]["id"])
                }
            }
            
            var missing_dict = new Object();
            
            for(each in missing){
                total_amount = 0
                for(each2 in list){
                    if(list[each2]["node02"] == missing[each]){
                        total_amount = total_amount + list[each2]["amount"] 
                    }
                }
                missing_dict[missing[each]] = total_amount
            } 

            
            var a = d3.scaleLinear().domain([0,1000]);
            var b = d3.scaleLinear().domain([0,1300]);
            var line_match = new Object();

            for (each in list){
                line_match[list[each]["count"]] = svgCanvas
                .append("line")
                .attr("x1", list[each]["origin_x"])
                .attr("y1", list[each]["origin_y"])
                .attr("x2", list[each]["dest_x"])
                .attr("y2", list[each]["dest_y"])
                .style("stroke", "blue")
                //.style("stroke-width", scaleValue(list[each]["amount"], 0, 10))
                .style("stroke-width", a(list[each]["amount"])*8)
            }

            var node_structure = new Object();
            var node_print = new Object();
            var adj = new Object();

            for (each in list){
                if(node_print[list[each]["node01"]] == 1){
                    continue;
                }
                node_structure[list[each]["node01"]] = svgCanvas
                .append("circle")
                .attr("cx", list[each]["origin_x"])
                .attr("cy", list[each]["origin_y"])
                .attr("r", 30*list[each]["total_amount"]/max_amount)
                .style("fill", "green")
                //.style("stroke-width", scaleValue(list[each]["amount"], 0, 10))
                .style("stroke", "green")
                .on("mouseover", mouse_over)
                .on("mouseout", mouse_out); 
                node_print[list[each]["node01"]] = 1
            }
            
            function mouse_over(d){

                x = d3.select(this).attr("cx")
                y = d3.select(this).attr("cy")
                
                var node = ""
                var total_trading = 0
                var adjacent = 0
                for(each in list){
                    
                    if(list[each]["origin_x"] == x && list[each]["origin_y"] == y){
                        node = list[each]["node01"]
                        total_trading = list[each]["total_amount"]
                        adjacent = list[each]["adjacent"]
                        break
                    }
                    if(list[each]["dest_x"] == x && list[each]["dest_y"] == y){
                        node = list[each]["node02"]
                        for(each2 in list){
                            if (list[each2]["origin_x"] == list[each]["dest_x"]){
                                total_trading = list[each2]["total_amount"]
                                adjacent = list[each2]["adjacent"]
                                break
                            }
                        }

                        break
                    }
                    if (total_trading == 0){
                        total_trading = missing_dict[node]
                    }
                }

                for(each in list){
                    node_structure[list[each]["node01"]].style("opacity", 0.2);
                    node_structure[list[each]["node02"]].style("opacity", 0.2);
                }
                console.log(node)
                node_structure[node].style("opacity", 1);

                li_new = count_match[node]

                for(each in list){
                    line_match[list[each]["count"]].style("opacity", 0.2);
                }

                for(each in li_new ){
                    line_match[li_new[each]].style("opacity", 1);
                }

                div.transition().duration(200).style("opacity",.9);
                div.html("Site: "+ node +"<br>Total Trading Amount: "+ total_trading +"<br>Total Connections: "+ adjacent)
                .style("left",x+"px")
                .style("top",y+"px")

            }

           function mouse_out(d){
                for(each in list){
                    node_structure[list[each]["node01"]].style("opacity", 1);
                    node_structure[list[each]["node02"]].style("opacity", 1);
                }
                div.transition().duration(200).style("opacity",0);
            }


            

            for(each2 in missing){

                for (each in list){
                    if ([list[each]["node02"]] != missing[each2]){
                        continue;
                    }
                    if (node_print[list[each]["node02"]] == 1){
                        continue;
                    }
                    node_print[list[each]["node02"]] = 1
                    node_structure[list[each]["node02"]] = svgCanvas
                    .append("circle")
                    .attr("cx", list[each]["dest_x"])
                    .attr("cy", list[each]["dest_y"])
                    .attr("r", 30* missing_dict[missing[each2]]/max_amount)
                    .style("fill", "green")
                    //.style("stroke-width", scaleValue(list[each]["amount"], 0, 10))
                    .style("stroke", "green")
                    .on("mouseout", mouse_out)
                    .on("mouseover", mouse_over); 
                }
            }
    
        });

    }
