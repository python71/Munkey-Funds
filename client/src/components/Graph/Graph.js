let canvas = this.refs.canvas
let ctx = canvas.getContext("2d")
let canvas = this.refs.canvas

class Canvas extends React.Component {
    componentDidMount() {
        const canvas = this.refs.canvas
        const ctx = canvas.getContext("2d")
        const img = this.refs.image
        img.onload = () => {
          ctx.drawImage(img, 0, 0)
          ctx.font = "40px Courier"
          ctx.fillText(this.props.text, 210, 75)
        }
      }

    config() {
        
        type: 'line',
        data: {
            labels: N,
            datasets: [{
                label: 'Predicted',
                fill: false,
                backgroundColor: 'red',
                borderColor: 'red',
                data: data2,
            }, {
                label: 'Actual',
                backgroundColor: 'blue',
                borderColor: 'blue',
                data: data1,
                fill: false,
            }]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'Stock Price Prediction'
            },
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Date'
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Stock Value'
                    }
                }]
            }
        }
    };

    return (

        <div>
            <canvas ref="canvas" width={640} height={425} />
        </div>

    );
}    
