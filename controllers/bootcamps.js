// @desc        GET all bootcamps
// @route       GET /api/v1/bootcamps
// @access      Public

exports.getBootcamps = (req, res, next) => {
  res
    .status(200)
    .json({ success: true , msg: "Show all bootcamps" })
}

// @desc        GET single bootcamp
// @route       GET /api/v1/bootcamps/:id
// @access      Public

exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true , msg: `Show bootcamp id: ${req.params.id}`})  
}

// @desc        POST single bootcamps
// @route       POST /api/v1/bootcamps
// @access      Private

exports.createBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true , msg: "Create a bootcamp"})  
}

// @desc        UPDATE single bootcamp
// @route       PUT /api/v1/bootcamps/:id
// @access      Private

exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true , msg: `Update bootcamp id: ${req.params.id}`})
}

// @desc        DELETE single bootcamp
// @route       DELETE /api/v1/bootcamps/:id
// @access      Private

exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true , msg: `Delete bootcamp id: ${req.params.id}`})
}