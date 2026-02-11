import Layout from "../components/common";
import ExerciseList from "../components/record/ExerciseList";
import RecordSummary from "../components/record/RecordSummary";
import RecordChart from "../components/record/RecordChart";
import MyDiaryList from "../components/record/MyDiaryList";

function Records() {
  return (
    <Layout>
      <div className="flex flex-col gap-14 pt-14">
        <RecordSummary />
        <RecordChart />
        <ExerciseList />
        <MyDiaryList />
      </div>
    </Layout>
  );
}

export default Records;
