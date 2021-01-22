import React from 'react'

const Accordion =({title,active,setActive}) =>  {
    return (
        <div className="accordion">
          <div className="accordion__heading">
              <div className="container">
                  <p>{title}</p>
                  <span onClick={()=>setActive(title)}>{active===title ? "X" :"|||"}</span>
              </div>
          </div>
          <div className={(active === title ? "show":"") + "accordionContent"}>
              <div className="container">
                  <p>Angelo Mathews: Unfortunately the openers got out early,
                   so we wanted to take a bit of time. 
                  The wicket was flat, credit to England 
                  for putting us under pressure. I got into rhythm in the 
                  second innings of the first Test, So I thought if I get a good start, 
                  I can make it big. Life's not easy with all the restrictions because of Covid.
                 Being stuck in a bubble in a hotel isn't easy, but ya playing a second Test match in the same conditions do help. If the weather is going to be this hot, it should start turning quickly.
                  Mickey (Arthur) asked me if I could bowl a few overs. I was just ready to bowl a few in case we bowled first.</p>
              </div>
          </div>  
        </div>
    )
}

export default Accordion
