export default async function Search({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const question = searchParams.q;

  return (
    <div className="w-full flex flex-col items-center bg-[#f0e9e1]">
      <div className="w-full h-20"></div>
      <div className="w-[70%] space-y-4 ">
        <span className="text-xl font-sans  rounded-lg bg-gradient-to-b from-white to-[#f2dcc4] p-1">
          {question}
        </span>
        <div className="w-full h-full border rounded-lg flex justify-center items-center bg-gray-50">
          <p className="w-[95%] p-2">
            Arbitration is a form of alternative dispute resolution where
            parties to a dispute agree to resolve it through an impartial third
            party known as an arbitrator, rather than going through the court
            system. Here are some key points about arbitration: It is a private
            process, unlike court litigation which is public. The proceedings
            are confidential. The parties voluntarily consent to enter into
            arbitration, often based on a clause in a contract they signed
            requiring arbitration if a dispute arises. An arbitrator or panel of
            arbitrators is chosen, either agreed upon by the parties or
            appointed by an arbitration institution like the American
            Arbitration Association. The arbitrator(s) hears evidence and
            arguments from both sides, similar to a trial but generally less
            formal. The arbitrator then renders a decision, called an &#34;award&#34;,
            which is legally binding on the parties and enforceable in court.
            Arbitration is generally faster and less expensive than litigation.
            There are limited avenues for appeal of an arbitrator&#39;s decision. It
            is commonly used in commercial, construction, labor/employment, and
            consumer disputes where the parties want to avoid court. The
            benefits of arbitration are its flexibility, confidentiality,
            time/cost savings, and the ability to choose arbitrators with
            expertise in the subject matter. However, it does involve giving up
            rights to the court system.Arbitration is a form of alternative dispute resolution where
            parties to a dispute agree to resolve it through an impartial third
            party known as an arbitrator, rather than going through the court
            system. Here are some key points about arbitration: It is a private
            process, unlike court litigation which is public. The proceedings
            are confidential. The parties voluntarily consent to enter into
            arbitration, often based on a clause in a contract they signed
            requiring arbitration if a dispute arises. An arbitrator or panel of
            arbitrators is chosen, either agreed upon by the parties or
            appointed by an arbitration institution like the American
            Arbitration Association. The arbitrator(s) hears evidence and
            arguments from both sides, similar to a trial but generally less
            formal. The arbitrator then renders a decision, called an &#34;award&#34;,
            which is legally binding on the parties and enforceable in court.
            Arbitration is generally faster and less expensive than litigation.
            There are limited avenues for appeal of an arbitrator&#39;s decision. It
            is commonly used in commercial, construction, labor/employment</p>
        </div>
      </div>
    </div>
  );
}
