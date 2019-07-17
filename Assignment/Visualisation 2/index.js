
window.onload = function(){ 

    // linking the svg created in html to append more features
    svgDate = d3.select(".date")
    svgCloud = d3.select(".cloud")
    svgHist = d3.select(".hist")
    svgImp = d3.select(".impression")
    svgWorld = d3.select(".world")
    hist_selec = d3.select(".hist_selec")
    cloud_select = d3.select(".cloud_select")
    bubble_select = d3.select(".bubble_select")
    density_select = d3.select(".density_select")
    density_svg = d3.select(".density")
    india_select = d3.select(".india_select")
    india_svg = d3.select(".india")

    // Series of rect for selection boxes
        ab = svgDate.append("rect")
        .attr("x", 600)
        .attr("y", 10)
        .attr("id", "1")
        .attr("width", 100)
        .attr("height", 100)
        .attr("fill", "white")
        .on("mouseover", mouse_over)
        .on("mouseout", mouse_out)

        svgDate.append("text")
        .attr("x", 630)
        .attr("y", 70)
        .attr("font-size", 35)
        .attr("fill", "blue")
        .text("23")

        b = svgDate.append("rect")
        .attr("x", 700)
        .attr("y", 10)
        .attr("id", "2")
        .attr("width", 100)
        .attr("height", 100)
        .attr("fill", "white")
        .on("mouseover", mouse_over)
        .on("mouseout", mouse_out);

        svgDate.append("text")
        .attr("x", 730)
        .attr("y", 70)
        .attr("font-size", 35)
        .attr("fill", "blue")
        .text("24");


        c = hist_selec.append("rect")
        .attr("x", 560)
        .attr("y", 10)
        .attr("id", "3")
        .attr("width", 120)
        .attr("height", 70)
        .attr("fill", "white")
        .on("mouseover", mouse_over)
        .on("mouseout", mouse_out)
        .on("click", bjp_functions);

        hist_selec.append("text")
        .attr("x", 600)
        .attr("y", 53)
        .attr("font-size", 25)
        .attr("fill", "blue")
        .text("BJP");

        d = hist_selec.append("rect")
        .attr("x", 750)
        .attr("y", 10)
        .attr("id", "4")
        .attr("width", 150)
        .attr("height", 70)
        .attr("fill", "white")
        .on("mouseover", mouse_over)
        .on("mouseout", mouse_out)
        .on("click", congress_functions);

        hist_selec.append("text")
        .attr("x", 770)
        .attr("y", 50)
        .attr("font-size", 25)
        .attr("fill", "blue")
        .text("Congress");

        e = cloud_select.append("rect")
        .attr("x", 560)
        .attr("y", 10)
        .attr("id", "e")
        .attr("width", 120)
        .attr("height", 70)
        .attr("fill", "white")
        .on("mouseover", mouse_over)
        .on("mouseout", mouse_out)
        .on("click", bjp_functions);

        cloud_select.append("text")
        .attr("x", 600)
        .attr("y", 53)
        .attr("font-size", 25)
        .attr("fill", "blue")
        .text("BJP");

        f = cloud_select.append("rect")
        .attr("x", 750)
        .attr("y", 10)
        .attr("id", "f")
        .attr("width", 150)
        .attr("height", 70)
        .attr("fill", "white")
        .on("mouseover", mouse_over)
        .on("mouseout", mouse_out)
        .on("click", congress_functions);

        cloud_select.append("text")
        .attr("x", 770)
        .attr("y", 50)
        .attr("font-size", 25)
        .attr("fill", "blue")
        .text("Congress");


        g = bubble_select.append("rect")
        .attr("x", 560)
        .attr("y", 10)
        .attr("id", "g")
        .attr("width", 120)
        .attr("height", 70)
        .attr("fill", "white")
        .on("mouseover", mouse_over)
        .on("mouseout", mouse_out)
        .on("click", bjp_functions);

        bubble_select.append("text")
        .attr("x", 600)
        .attr("y", 53)
        .attr("font-size", 25)
        .attr("fill", "blue")
        .text("BJP");

        h = bubble_select.append("rect")
        .attr("x", 750)
        .attr("y", 10)
        .attr("id", "h")
        .attr("width", 150)
        .attr("height", 70)
        .attr("fill", "white")
        .on("mouseover", mouse_over)
        .on("mouseout", mouse_out)
        .on("click", congress_functions);

        bubble_select.append("text")
        .attr("x", 770)
        .attr("y", 50)
        .attr("font-size", 25)
        .attr("fill", "blue")
        .text("Congress");

        i = density_select.append("rect")
        .attr("x", 560)
        .attr("y", 10)
        .attr("id", "i")
        .attr("width", 120)
        .attr("height", 70)
        .attr("fill", "white")
        .on("mouseover", mouse_over)
        .on("mouseout", mouse_out)
        .on("click", bjp_functions);

        density_select.append("text")
        .attr("x", 600)
        .attr("y", 53)
        .attr("font-size", 25)
        .attr("fill", "blue")
        .text("BJP");

        j = density_select.append("rect")
        .attr("x", 750)
        .attr("y", 10)
        .attr("id", "j")
        .attr("width", 150)
        .attr("height", 70)
        .attr("fill", "white")
        .on("mouseover", mouse_over)
        .on("mouseout", mouse_out)
        .on("click", congress_functions);

        density_select.append("text")
        .attr("x", 770)
        .attr("y", 50)
        .attr("font-size", 25)
        .attr("fill", "blue")
        .text("Congress");

        k = india_select.append("rect")
        .attr("x", 560)
        .attr("y", 10)
        .attr("id", "k")
        .attr("width", 120)
        .attr("height", 70)
        .attr("fill", "white")
        .on("mouseover", mouse_over)
        .on("mouseout", mouse_out)
        .on("click", bjp_functions);

        india_select.append("text")
        .attr("x", 600)
        .attr("y", 53)
        .attr("font-size", 25)
        .attr("fill", "blue")
        .text("BJP");

        l = india_select.append("rect")
        .attr("x", 750)
        .attr("y", 10)
        .attr("id", "l")
        .attr("width", 150)
        .attr("height", 70)
        .attr("fill", "white")
        .on("mouseover", mouse_over)
        .on("mouseout", mouse_out)
        .on("click", congress_functions);

        india_select.append("text")
        .attr("x", 770)
        .attr("y", 50)
        .attr("font-size", 25)
        .attr("fill", "blue")
        .text("Congress");

        // Function to highlight the selected the box based on id
        function mouse_over(){
            id = d3.select(this).attr("id")
            y = d3.select(this).attr("y")
            if (id == "1"){
                ab.attr("fill", "red")
            }
            if (id == "2"){
                b.attr("fill", "red")
            }
            if (id == "3"){
                c.attr("fill", "red")
            }
            if (id == "4"){
                d.attr("fill", "green")
            }
            if (id == "e"){
                e.attr("fill", "red")
            }
            if (id == "f"){
                f.attr("fill", "green")
            }
            if (id == "g"){
                g.attr("fill", "red")
            }
            if (id == "h"){
                h.attr("fill", "green")
            }
            if (id == "i"){
                i.attr("fill", "red")
            }
            if (id == "j"){
                j.attr("fill", "green")
            }
            if (id == "k"){
                k.attr("fill", "red")
            }
            if (id == "l"){
                l.attr("fill", "green")
            }
        }

        // de selects the rect once mouse is taken away
        function mouse_out(){
            b.attr("fill", "white")
            ab.attr("fill", "white")
            c.attr("fill", "white")
            d.attr("fill", "white")
            e.attr("fill", "white")
            f.attr("fill", "white")
            g.attr("fill", "white")
            h.attr("fill", "white")
            i.attr("fill", "white")
            j.attr("fill", "white")
            k.attr("fill", "white")
            l.attr("fill", "white")
        }

        function hist_bjp(){
            d.attr("fill", "white")
            svgHist.selectAll("rect").remove();
                draw()
                a = bjp;
                count = 0
        
                for (each in a){
                count = count + 1;

                svgHist.append("rect")
                .attr("width", barwidth)
                .attr("id", count)
                .attr("height", a[each])
                .attr("x", (count+3) * barwidth + baroffset)
                .attr("y", 390 - a[each])
                .style("fill", "rgb(" + (count*50).toString()+",45,54)")
                .attr("stroke", "red")
        };
        }

        function hist_cong(){
            c.attr("fill", "white")
            svgHist.selectAll("rect").remove();
                draw(cong)
        };
        
        cond_dict = data
        // format the data

        var data = [40,50,60,70,80]
        var sentiments = ["Highly Negative" ,"Negative" ,"Neutral" ,"Positive" , "Highly Positive"]

        var x = d3.scaleBand()
        .domain(sentiments)     // can use this instead of 1000 to have the max of data: d3.max(data, function(d) { return +d.price })
        .range([400, 900]);

        svgHist.append("g")
        .attr("transform", "translate(0," + 400 + ")")
        .call(d3.axisBottom(x));

        // Fix y-axis issues

        bjp = [2,19,294,551,34]
        cong = [11,66,299,79,70]

        barwidth = 100;
        baroffset = 5;  

// To calculate retweet values for bubble chart
d3.csv("Cong.csv", function(data) {
    var positive = 0;
    var negative = 0;
    var neutral = 0;
    var highly_positive = 0;
    var highly_negative = 0;
    
        for(each in data){
            if (data[each]["polarity"] == "Positive"){
                positive = positive + parseInt(data[each]["retweet"]);
            }
            if (data[each]["polarity"] == "Negative"){
                negative = negative + parseInt(data[each]["retweet"]);
            }
            if (data[each]["polarity"] == "Neutral"){
                neutral = neutral + parseInt(data[each]["retweet"]);
            }
            if (data[each]["polarity"] == "Highly Positive"){
                highly_positive = highly_positive + parseInt(data[each]["retweet"]);
            }
            if (data[each]["polarity"] == "Highly Negative"){
                highly_negative = highly_negative + parseInt(data[each]["retweet"]);
            }
        }
    })

    // To calculate histogram values
    d3.csv("BJP.csv", function(data) {
        var positive = 0;
        var negative = 0;
        var neutral = 0;
        var highly_positive = 0;
        var highly_negative = 0;
        
            for(each in data){
                if (data[each]["polarity"] == "Positive"){
                    positive = positive + 1;
                }
                if (data[each]["polarity"] == "Negative"){
                    negative = negative + 1;
                }
                if (data[each]["polarity"] == "Neutral"){
                    neutral = neutral + 1;
                }
                if (data[each]["polarity"] == "Highly Positive"){
                    highly_positive = highly_positive + 1;
                }
                if (data[each]["polarity"] == "Highly Negative"){
                    highly_negative = highly_negative + 1;
                }
            }
        })


function draw(a){
    svgHist.append("rect")
            .attr("width", 1000)
            .attr("height", 500)
            .attr("x", 200)
            .attr("y", 10)
            .style("fill", "gray");

            var sentiments = ["Highly Negative","Negative","Neutral","Positive", "Highly Positive"]

            var x = d3.scaleBand()
            .domain(sentiments)     // can use this instead of 1000 to have the max of data: d3.max(data, function(d) { return +d.price })
            .range([400, 900]);
    
            svgHist.append("g")
            .attr("transform", "translate(0," + 400 + ")")
            .call(d3.axisBottom(x));

            count = 0
    
            for (each in a){
            count = count + 1;

            svgHist.append("rect")
            .attr("width", barwidth)
            .attr("height", a[each])
            .attr("x", (count+3) * barwidth + baroffset)
            .attr("y", 390 - a[each])
            .style("fill", "rgb(50," + (count*50).toString()+",54)")
            .attr("stroke", "red")
    }
}

retweets_cong = {"first": 50, "second":100, "third":100, "fourth":80, "fifth":40}
retweets_bjp = {"first": 100, "second":50, "third":100, "fourth":100, "fifth":150}

//retweets_cong = {"first": 362917, "second":378680, "third":2709392, "fourth":202349, "fifth":3615}
//retweets_bjp = {"first": 1011037, "second":64076, "third":6299756, "fourth":262566, "fifth":2739}
c_x = {"first": 500,"second": 650,"third": 850 , "fourth": 600, "fifth": 800 }
c_y = {"first": 200,"second": 150,"third": 150 , "fourth": 350, "fifth": 350 }
colour = {"first": "green", "second": "red", "third": "brown" , "fourth": "blue", "fifth": "rgb(244, 125, 66)"}
sentiment = {"first": "Positive", "second": "Neutral", "third": "Negative" , "fourth": "Highly positive", "fifth": "Highly negative"}


///////////////////////////  Bubble chart ////////////////////////////////////////


var linearScale = d3.scaleLinear().domain([0,1500000]).range([0,50]);

function bubble_bjp(){
    svgImp.selectAll("rect").remove();
    draw_bubble(retweets_cong)
}

function bubble_cong(){
    svgImp.selectAll("rect").remove();
    draw_bubble(retweets_bjp)
}

function draw_bubble(retweets){

    svgImp.append("rect")
            .attr("width", 1000)
            .attr("height", 500)
            .attr("x", 200)
            .attr("y", 10)
            .style("fill", "gray");

    count = 0
    for (each in retweets){
        count = count + 1;
        svgImp.append("circle")

    
    .attr("r", retweets[each])
    .attr("cx", c_x[each])
    .attr("cy", c_y[each])
    .attr("fill", colour[each]);

    // For legend
    svgImp.append("rect")
                .attr("width", 30)
                .attr("height", 30)
                .attr("x", 1000)
                .attr("y", 10*count*4)
                .style("fill", colour[each]);

    svgImp.append("text")
                .attr("x", 1050)
                .attr("y", (10*count*4)+16)
                .text(sentiment[each])

    }

}
// All plots of bjp will be generated on clicking BJP box
function bjp_functions(){
    bubble_bjp();
    hist_bjp();
    cloud_bjp();
    density_bjp();
    ind_bjp();
}
// All plots of congress will be generated on clicking Congress box
function congress_functions(){
    bubble_cong();
    hist_cong();
    cloud_cong(); 
    density_congress(); 
    ind_cong(); 
}

/////////////////////////////////////////////  Word Cloud  ///////////////////////////////////////

function cloud_bjp(){
    svgCloud.selectAll("rect").remove();
        draw_wc("BJP.png")
}

function cloud_cong(){
    svgCloud.selectAll("rect").remove();
        draw_wc("Cong.png")
}

function draw_wc(image){
svgCloud.append("rect")
            .attr("width", 1000)
            .attr("height", 500)
            .attr("x", 200)
            .attr("y", 10)
            .style("fill", "gray");

svgCloud.append("svg:image")
.attr('x', 200)
.attr('y', 10)
.attr('width', 1000)
.attr('height', 500)
.attr("xlink:href", image);
}


/////////////////////////////////////////////  India map  ///////////////////////////////////////

function ind_bjp(){
    india_svg.selectAll("rect").remove();
        draw_ind("india_bjp.png")
}

function ind_cong(){
    india_svg.selectAll("rect").remove();
        draw_ind("india_cong.png")
}

function draw_ind(image){
    india_svg.append("rect")
                .attr("width", 1000)
                .attr("height", 500)
                .attr("x", 200)
                .attr("y", 10)
                .style("fill", "gray");
    
    india_svg.append("svg:image")
    .attr('x', 200)
    .attr('y', 10)
    .attr('width', 1000)
    .attr('height', 500)
    .attr("xlink:href", image);
    }


/////////////////////////////////// Density plot ///////////////////////////////////

function density_bjp(){
    density_svg.selectAll("rect").remove();
    draw_density("BJP.csv", "rgb(244, 125, 66)")
}

function density_congress(){
    density_svg.selectAll("rect").remove();
    draw_density("Cong.csv", "green")
}

function draw_density(csv_file, color_fill){

    density_svg.append("rect")
            .attr("width", 1000)
            .attr("height", 500)
            .attr("x", 200)
            .attr("y", 10)
            .style("fill", "gray");

    // get the data
    d3.csv(csv_file, function(data) {

    // add the x Axis
    var x = d3.scaleLinear()
                .domain([-1.6, 1.6])
                .range([500,1000]);
                
        density_svg.append("g")
        .attr("transform", "translate(0," + 400 + ")")
        .call(d3.axisBottom(x));

    // add the y Axis
    var y = d3.scaleLinear()
                .range([400, -100])
                .domain([0, 1]);
            
                density_svg.append("g")
        .call(d3.axisLeft(y));

    // Compute kernel density estimation
    var kde = kernelDensityEstimator(kernelEpanechnikov(1), x.ticks(50))
    var density =  kde( data.map(function(d){   
        return d["pol_value"]; }) )

    // Plot the area
    density_svg.append("path")
        .attr("class", "mypath")
        .datum(density)
        .attr("fill", color_fill)
        .attr("opacity", ".9")
        .attr("stroke", "#000")
        .attr("stroke-width", 1)
        .attr("stroke-linejoin", "round")
        .attr("d",  d3.line()
            .curve(d3.curveBasis)
            .x(function(d) { 
                return x(d[0]); })
            .y(function(d) { return y(d[1]); })
        );

    });
}


// Function to compute density
function kernelDensityEstimator(kernel, X) {
  return function(V) {
    return X.map(function(x) {
      return [x, d3.mean(V, function(v) { return kernel(x - v); })];
    });
  };
}
function kernelEpanechnikov(k) {
  return function(v) {
    return Math.abs(v /= k) <= 1 ? 0.75 * (1 - v * v) / k : 0;
  };
}

    }
