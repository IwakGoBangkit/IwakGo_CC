const express = require('express');
const router = express.Router();
const db = require('../db');

// Data untuk budidaya ikan nila
const fishCultivationNila = {
  caraBudidaya: 'Informasi tentang cara budidaya ikan nila...',
  rekomendasiPakan: 'Rekomendasi pakan untuk ikan nila...',
  penyakit: 'Panduan mengenai penyakit yang sering muncul pada ikan nila...'
};

// Data untuk budidaya ikan mujaer
const fishCultivationMujaer = {
  caraBudidaya: 'Informasi tentang cara budidaya ikan mujaer...',
  rekomendasiPakan: 'Rekomendasi pakan untuk ikan mujaer...',
  penyakit: 'Panduan mengenai penyakit yang sering muncul pada ikan mujaer...'
};

// Route: GET /api/home/fish-cultivation-nila
router.get('/fish-cultivation-nila', (req, res) => {
  res.status(200).json(fishCultivationNila);
});

// Route: GET /api/home/fish-cultivation-mujaer
router.get('/fish-cultivation-mujaer', (req, res) => {
  res.status(200).json(fishCultivationMujaer);
});
  
  // Route: GET /api/home/fish-cultivation-nila/cara budi daya
  router.get('/fish-cultivation-nila/cara-budi-daya', (req, res) => {
    res.status(200).json({ tips: fishCultivationNila.caraBudiDaya });
  });
  
  // Route: GET /api/home/fish-cultivation-nila/rekomendasi-pakan
  router.get('/fish-cultivation-nila/rekomendasi-pakan', (req, res) => {
    res.status(200).json({ tips: fishCultivationNila.rekomendasiPakan });
  });
  
  // Route: GET /api/home/fish-cultivation-nila/penyakit
  router.get('/fish-cultivation-nila/penyakit', (req, res) => {
    res.status(200).json({ tips: fishCultivationNila.penyakit });
  });
  
  // Route: GET /api/home/fish-cultivation-mujaer/cara-budi-daya
  router.get('/fish-cultivation-mujaer/cara-budi-daya', (req, res) => {
    res.status(200).json({ tips: fishCultivationMujaer.caraBudiDaya });
  });
  
  // Route: GET /api/home/fish-cultivation-mujaer/rekomendasi-pakan
  router.get('/fish-cultivation-mujaer/rekomendasi-pakan', (req, res) => {
    res.status(200).json({ tips: fishCultivationMujaer.rekomendasiPakan });
  });
  
  // Route: GET /api/home/fish-cultivation-mujaer/penyakit
  router.get('/fish-cultivation-mujaer/penyakit', (req, res) => {
    res.status(200).json({ tips: fishCultivationMujaer.penyakit });
  });

  // Route: POST /api/home/upload-image
router.post('/upload-image', (req, res) => {
    // Proses pengunggahan foto untuk analisis
    // Hasil analisis dari foto yang diunggah
    const analysisResult = {
      jenisIkan: 'ikan nila', 
      kondisi: 'sehat', 
      saranPengobatan: 'Tidak ada masalah' 
    };
  
    res.status(200).json(analysisResult);
  });
  
  // Route: POST /api/home/analyze-image
  router.post('/analyze-image', (req, res) => {
    // Proses analisis foto yang diambil dari kamera  
    // Hasil analisis dari foto yang dianalisis
    const analysisResult = {
      jenisIkan: 'ikan mujaer', 
      kondisi: 'bercak putih', 
      saranPengobatan: 'Menggunakan obat tertentu' 
    };
  
    res.status(200).json(analysisResult);
  });

  

module.exports = router;