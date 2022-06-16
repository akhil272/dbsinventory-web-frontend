import moment from "moment";

const UserDashboard = () => {
  return (
    <div>
      <div className="flex justify-between ">
        <div>Icon</div>
        <div>{moment(new Date()).format("dddd Do YYYY")}</div>
        <div>Icon</div>
      </div>
      <div>
        <div className="grid grid-cols-2">
          <div className="p-10">Total Quotations</div>
          <div className="p-10">Total Purchase</div>
        </div>
        <div>
          <h5>Quotations</h5>
          <div>List goes here</div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
