const citygeo = require("../model/cityMap");
const provDtl = require("../model/provDtl");
const provgeo = require("../model/provMap");

let page = 1;
const limit = 3;

module.exports = {
  getProvMapPage: async (req, res, next) => {
    const provLength = await provgeo.count();

    res.status(200).json({
      totalPage: Math.ceil(provLength / Number.parseInt(limit)),
    });
  },

  getProvMap: async (req, res, next) => {
    const pageNumber = Number.parseInt(req.value);
    if (!Number.isNaN(pageNumber) && pageNumber > 0) {
      page = pageNumber;
    }

    const prov = await provgeo
      .find()
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ _id: 1 });

    if (pageNumber <= 0) {
      res.status(404).json({
        msg: "Nomor page tidak terdeteksi, silahkan mulai dengan query ?page=1",
      });
    } else {
      res.status(200).json(prov);
    }
  },

  getProvOnIslandPage: async (req, res, next) => {
    const { island } = req.query;
    const provOnIslandLength = await provgeo.find({ island }).count();

    res.status(200).json({
      totalPage: Math.ceil(provOnIslandLength / Number.parseInt(limit)),
    });
  },

  getProvByIsland: async (req, res, next) => {
    const { island } = req.query;

    const pageNumber = Number.parseInt(req.query.page);
    if (!Number.isNaN(pageNumber) && pageNumber > 0) {
      page = pageNumber;
    }

    const provIsland = await provgeo
      .find({ island })
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ _id: 1 });

    if (pageNumber <= 0) {
      res.status(404).json({
        msg: "Nomor page tidak terdeteksi, silahkan mulai dengan query ?page=1",
      });
    } else {
      res.status(200).json(provIsland);
    }
  },

  getProvDetail: async (req, res, next) => {
    const { prov_id } = req.query;
    const detailProv = await provDtl.find({ prov_id });
    res.status(200).json(detailProv);
  },

  getCityMapPage: async (req, res, next) => {
    const cityLength = await citygeo.count();

    res.status(200).json({
      totalPage: Math.ceil(cityLength / Number.parseInt(limit)),
    });
  },

  getCityMap: async (req, res, next) => {
    const pageNumber = Number.parseInt(req.value);
    if (!Number.isNaN(pageNumber) && pageNumber > 0) {
      page = pageNumber;
    }

    const city = await citygeo
      .find()
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ _id: 1 });

    if (pageNumber <= 0) {
      res.status(404).json({
        msg: "Nomor page tidak terdeteksi, silahkan mulai dengan query ?page=1",
      });
    } else {
      res.status(200).json(city);
    }
  },

  getCityByProvPage: async (req, res, next) => {
    const { prov_id } = req.query;
    const cityByProvLength = await citygeo.find({ prov_id }).count();

    res.status(200).json({
      totalPage: Math.ceil(cityByProvLength / Number.parseInt(limit)),
    });
  },

  getCityByProv: async (req, res, next) => {
    const { prov_id } = req.query;

    const pageNumber = Number.parseInt(req.query.page);
    if (!Number.isNaN(pageNumber) && pageNumber > 0) {
      page = pageNumber;
    }

    const cityProv = await citygeo
      .find({ prov_id })
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ _id: 1 });

    if (pageNumber <= 0) {
      res.status(404).json({
        msg: "Nomor page tidak terdeteksi, silahkan mulai dengan query ?page=1",
      });
    } else {
      res.status(200).json(cityProv);
    }
  },

  getCityOnIslandPage: async (req, res, next) => {
    const { island } = req.query;
    const cityOnIslandLength = await citygeo.find({ island }).count();

    res.status(200).json({
      totalPage: Math.ceil(cityOnIslandLength / Number.parseInt(limit)),
    });
  },

  getCityByIsland: async (req, res, next) => {
    const { island } = req.query;

    const pageNumber = Number.parseInt(req.query.page);
    if (!Number.isNaN(pageNumber) && pageNumber > 0) {
      page = pageNumber;
    }

    const cityIsland = await citygeo
      .find({ island })
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ _id: 1 });

    if (pageNumber <= 0) {
      res.status(404).json({
        msg: "Nomor page tidak terdeteksi, silahkan mulai dengan query ?page=1",
      });
    } else {
      res.status(200).json(cityIsland);
    }
  },
};
