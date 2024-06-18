// src/WastagePieChart.js
import React, { useMemo } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import 'bootstrap/dist/css/bootstrap.min.css';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const workData = [
  {
    date: '2024-06-20',
    totalWeight: '100kg',
    mrfName: 'MRF 1',
    wasteDetails: {
      pet: '20kg',
      pp: '24kg',
      hdpe: '56kg'
    }
  },
  {
    date: '2024-06-22',
    totalWeight: '120kg',
    mrfName: 'MRF 2',
    wasteDetails: {
      pet: '30kg',
      pp: '30kg',
      hdpe: '60kg'
    }
  },
  {
    date: '2024-06-24',
    totalWeight: '90kg',
    mrfName: 'MRF 3',
    wasteDetails: {
      pet: '25kg',
      pp: '25kg',
      hdpe: '40kg'
    }
  }
];

const WastagePieChart = () => {
  const aggregatedData = useMemo(() => {
    const totals = { pet: 0, pp: 0, hdpe: 0 };

    workData.forEach(item => {
      totals.pet += parseFloat(item.wasteDetails.pet);
      totals.pp += parseFloat(item.wasteDetails.pp);
      totals.hdpe += parseFloat(item.wasteDetails.hdpe);
    });

    return totals;
  }, [workData]);

  const data = {
    labels: ['PET', 'PP', 'HDPE'],
    datasets: [
      {
        label: 'Wastage Types',
        data: [aggregatedData.pet, aggregatedData.pp, aggregatedData.hdpe],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      tooltip: {
        enabled: true,
      },
      datalabels: {
        formatter: (value, context) => {
          const total = context.chart._metasets[0].total;
          const percentage = (value / total * 100).toFixed(2) + '%';
          return percentage;
        },
        color: '#fff',
        font: {
          weight: 'bold'
        }
      }
    },
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Wastage Analysis</h2>
      <div className="row justify-content-center">
        <div className="mt-3 text-center">
        <p style={{fontSize:'18px', fontWeight:'bold', color:'#37B943'}}>{aggregatedData.hdpe + aggregatedData.pet + aggregatedData.pp}Kg Wastes Submitted</p>

          <div style={{ height: '200px', width: '300px',display:'flex', alignItems:'center',justifyContent:'center' }}>
            <Pie data={data} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WastagePieChart;
