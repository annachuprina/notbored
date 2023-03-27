import '../styles/activityGenerator.css'

export default function ActivityGeneratorView(props) {

  function changeAccessibilityACB(e){
    props.setAccessibility(e.target.value)
  }

  function changeParticipantsACB(e){
    props.setParticipants(e.target.value)
  }
  function changePriceACB(e){
    props.setPrice(e.target.value)
  }
  function changeTypeACB(e){
    props.setType(e.target.value)
  }

  function handleGenerateACB(a){
    props.setSearch()
  }

  return (
      <div className="menu">
        <div className="wrapper_1">
          <div className="wrapper_1_sub">
            <div>Price</div>
            <select name="price" id="price" className="dropDownMenu" onChange={changePriceACB}>
             {props.price.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </div>
          <div className="wrapper_1_sub">
            <div>Type</div>
            <select name="type" id="type"  className="dropDownMenu" onChange={changeTypeACB}>
              {props.type.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
          <div className="wrapper_1_sub">
            <div>Participants</div>
            <select name="participants" id="participants" className="dropDownMenu" onChange={changeParticipantsACB}>
              {props.participants.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
          <div className="wrapper_1_sub">
            <div>Accessibility</div>
            <select name="accessibility" id="accessibility" className="dropDownMenu" onChange={changeAccessibilityACB}>
              {props.accessibility.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="wrapper_3">
          <button className="generateButton" onClick={handleGenerateACB}>Generate New Activity</button>
        </div>
      </div>
  )
}