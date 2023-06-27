import React, { useEffect, useRef } from 'react'
import { createChart, ColorType } from 'lightweight-charts'

function CreateChart(props) {
    const {
        data,
        colors: {
            backgroundColor = 'transparent',
            lineColor = '#2962FF',
            textColor = '#A7B1BC',
            areaTopColor = '#2962FF',
            areaBottomColor = 'rgba(41, 98, 255, 0.28)',
        } = {}
    } = props;

    const chartContainerRef = useRef()
    useEffect(() => {
        const handleResize = () => {
            chart.applyOptions({ width: chartContainerRef.current.clientWidth })  //this handles the size of the chart upon screen / view width resize
        }

        const chart = createChart(chartContainerRef.current, {
            layout: {
                background: { type: ColorType.Solid, color: backgroundColor },
                textColor,
            },
            grid: {
                vertLines: { color: "transparent" },
                horzLines: { color: "transparent" },
            },
            width: chartContainerRef.current.clientWidth,
            height:500,
        })

        chart.timeScale().fitContent();
        // Setting the border color for the vertical axis
        chart.priceScale("right").applyOptions({
            borderColor: "#A7B1BC",
            ticksVisible: true,
        });

        // Setting the border color for the horizontal axis
        chart.timeScale().applyOptions({
            borderColor: "#A7B1BC",
            //   visible: false,
            secondsVisible: true,
            ticksVisible: true,
            timeVisible: true,
        });
        const newSeries = chart.addCandlestickSeries({ lineColor, topColor: areaTopColor, bottomColor: areaBottomColor })
        newSeries.setData(data)

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize);
            chart.remove()
        };
    }, [data, backgroundColor, lineColor, textColor, areaTopColor, areaBottomColor])


    return (
        <div ref={chartContainerRef} />
    )
}

export default CreateChart