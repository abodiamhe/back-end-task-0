const currentDate = new Date();

exports.getAdmin = (rea, res, next) => {
  try {
    res.status(200).json({
      email: "akhigbesadiq@gmail.com",
      current_datatime: currentDate,
      github_url: "https://github.com/abodiamhe/back-end-task-0",
    });
  } catch (err) {
    err.statusCode = 500;
    next(err)
  }
};
