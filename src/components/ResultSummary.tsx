import Container from "./Container"
import Result from "./Result"
import Summary from "./Summary"

const ResultSummary = () => {
  return (
    <Container className={`flex flex-col rounded-[25px] sm:flex-row w-full h-full sm:w-auto sm:h-auto  shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]`}>
      <Result/>
      <Summary/>

      
    </Container>
  )
}

export default ResultSummary


// .ResultSummaryContainer {
//   display: flex;
//   flex-direction: row;
//   border-radius: 25px;
// }
// @media screen and (max-width: 375px) {
//   .ResultSummaryContainer {
//       width: 100vw;
//       height: 100vh;
//       flex-direction: column;
//   }
// } 


