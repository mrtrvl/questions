 import React from 'react';
 import Choice from './Choice';
 import ErrorMessage from './ErrorMessage';
 class Question extends React.Component {
   state = {
     choiceId: null,
     error: null
   }
   
   showChoices = () => {
     return this.props.question.choices.map(choice => {
       return <Choice key={ choice.id } choice={ choice } onClick={this.onClick} />
     });
   }

   onClick = (id) => {
    this.setState({ choiceId: id});
   }

   onButtonClick = (event) => {
    if (!this.state.choiceId) {
      this.setState({error: 'Tee oma valik!'});
      setTimeout(() => {
        this.setState({error: null});
      }, 3000);
    } else {
      this.props.onClick({
        choiceId: this.state.choiceId,
        questionId: this.props.question.id,
      });
    }
   }

   render() {
     const { question } = this.props;
     return (
       <div className="ui segment" style={{marginTop: "10px"}}>
         <h2>{ question.question }</h2>
         <div className="ui list">
          {this.showChoices()}
         </div>
         <ErrorMessage message={this.state.error} />
         <button className="ui primary button" onClick={e => this.onButtonClick(e)}>Vasta</button>
       </div>
     );
   }
 }

 export default Question;