import { usePosts } from "../PostContext";
import questionImg from "../icons/questionImg.jpg";
function ReportProblem() {
  const { t } = usePosts();
  return (
    <div className=" flex items-center gap-4 p-2 border rounded-md mt-8">
      <div className="max-w-32 ">
        <img src={questionImg} alt="question photo" />
      </div>
      <div className="flex flex-col gap-4">
        <p className="font-bold">{t("question")}</p>
        <button className="px-5 py-2 bg-dark-red hover:bg-red-600 rounded-xl font-semibold text-white">
          {t("report")}
        </button>
      </div>
    </div>
  );
}

export default ReportProblem;
