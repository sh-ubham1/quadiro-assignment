const Car = require('../models/car');

exports.createCar = async (req, res) => {
    const { name, manufacturingYear, price } = req.body;

    try {
        const car = new Car({ name, manufacturingYear, price });
        await car.save();
        res.json(car);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.getCars = async (req, res) => {
    try {
        const cars = await Car.find();
        res.json(cars);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.getCar = async (req, res) => {
    try {
        const car = await Car.findById(req.params.id);
        if (!car) {
            return res.status(404).json({ msg: 'Car not found' });
        }
        res.json(car);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.updateCar = async (req, res) => {
    const { name, manufacturingYear, price } = req.body;

    try {
        let car = await Car.findById(req.params.id);
        if (!car) {
            return res.status(404).json({ msg: 'Car not found' });
        }

        car = await Car.findByIdAndUpdate(req.params.id, { $set: { name, manufacturingYear, price } }, { new: true });
        res.json(car);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.deleteCar = async (req, res) => {
    try {
        const car = await Car.findById(req.params.id);
        if (!car) {
            return res.status(404).json({ msg: 'Car not found' });
        }

        await car.remove();
        res.json({ msg: 'Car removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
