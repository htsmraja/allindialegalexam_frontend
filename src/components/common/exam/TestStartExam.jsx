import React from 'react'

const TestStartExam = () => {
  return (
    <>
      <div className='container'>
        {/* Mock Test part start */}
        <div className='mockTestBx'>
          <div className='row'>
            {/* left part start */}
            <div className='col-md-9 col-sm-8 col-12'>
              <div className='dtlPart'>
                <div className='headTitel'>Online Exam</div>
                <div className='innerDtl'>
                  <h4 className='mb20'>Which Article of the Constitution prohibits discrimination on grounds of religion, race, caste, sex or place of birth?</h4>
                  <div>
                    <div className='row'>
                      <div className='col-sm-6 mb5'>
                        <label style={{ display: "block", marginBottom: 5 }}>
                          <input type="radio" defaultValue="Article 14" name={62} />
                          &nbsp;Article 14
                        </label>
                      </div>
                      <div className='col-sm-6 mb5'>
                        <label style={{ display: "block", marginBottom: 5 }}>
                          <input type="radio" defaultValue="Article 15" name={62} />
                          &nbsp;Article 15
                        </label>
                      </div>
                      <div className='col-sm-6 mb5'>
                        <label style={{ display: "block", marginBottom: 5 }}>
                          <input type="radio" defaultValue="Article 19" name={62} />
                          &nbsp;Article 19
                        </label>
                      </div>
                      <div className='col-sm-6 mb5'>
                        <label style={{ display: "block", marginBottom: 5 }}>
                          <input type="radio" defaultValue="Article 25" name={62} />
                          &nbsp;Article 25
                        </label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <textarea className='form-control mt10' name="" id="" rows={5} style={{ maxWidth: '700px' }} placeholder='Write your answer here'></textarea>
                    <label htmlFor="">0 Word</label>
                  </div>

                  <p style={{fontWeight:'bold'}}>this is a text <input type="text" /> sample</p>

                  <div className='table-responsive'>
                    <table className='table table-bordered table-sm bg-light'>
                      <thead>
                        <tr>
                          <th>Left</th>
                          <th>Match</th>
                          <th>Right</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Mandamus</td>
                          <td>
                            <select className='form-control pt0 input-sm' style={{maxWidth:'250px'}}>
                              <option value="">Select</option>
                              <option value={0}>Command Government</option>
                              <option value={1}>Quash lower court order</option>
                              <option value={2}>Stop judicial action</option>
                              <option value={3}>Produce detained person</option>
                            </select>
                          </td>
                          <td>Command Government</td>
                        </tr>
                        <tr>
                          <td>Certiorari</td>
                          <td>
                            <select className='form-control pt0 input-sm' style={{maxWidth:'250px'}}>
                              <option value="">Select</option>
                              <option value={0}>Command Government</option>
                              <option value={1}>Quash lower court order</option>
                              <option value={2}>Stop judicial action</option>
                              <option value={3}>Produce detained person</option>
                            </select>
                          </td>
                          <td>Quash lower court order</td>
                        </tr>
                        <tr>
                          <td>Prohibition</td>
                          <td>
                            <select className='form-control pt0 input-sm' style={{maxWidth:'250px'}}>
                              <option value="">Select</option>
                              <option value={0}>Command Government</option>
                              <option value={1}>Quash lower court order</option>
                              <option value={2}>Stop judicial action</option>
                              <option value={3}>Produce detained person</option>
                            </select>
                          </td>
                          <td>Stop judicial action</td>
                        </tr>
                        <tr>
                          <td>Habeas Corpus</td>
                          <td>
                            <select className='form-control pt0 input-sm' style={{maxWidth:'250px'}}>
                              <option value="">Select</option>
                              <option value={0}>Command Government</option>
                              <option value={1}>Quash lower court order</option>
                              <option value={2}>Stop judicial action</option>
                              <option value={3}>Produce detained person</option>
                            </select>
                          </td>
                          <td>Stop judicial action</td>
                        </tr>
                      </tbody>
                    </table>

                  </div>
                </div>
                <div className='dtlFooter'>
                  <button disabled="">⬅ Previous</button>
                  <h5>Question 1 / 30</h5>
                  <button style={{}}>Save & Next ➡</button>
                </div>
              </div>
            </div>
            {/* left part end */}

            {/* right part start */}
            <div className='col-md-3 col-sm-4 col-12'>
              <div className='leftSidebar'>
                <div className='headTitel'>Time Left</div>
                <div className='innerDtl'>
                  <div className='timer'>
                    <h5>
                      00
                      <span>hours</span>
                    </h5>
                    <h5>
                      42
                      <span>minutes</span>
                    </h5>
                    <h5>
                      34
                      <span>Seconds</span>
                    </h5>
                  </div>
                </div>
                <div className='headTitel'>Quant</div>
                <div className='innerDtl'>
                  <ul className='qusCount'>
                    <li><button className='attempted'>1</button></li>
                    <li><button className='attempted'>2</button></li>
                    <li><button className='attempted'>3</button></li>
                    <li><button className='attempted'>4</button></li>
                    <li><button className='attempted'>5</button></li>
                    <li><button className='attempted'>6</button></li>
                    <li><button className='attempted'>7</button></li>
                    <li><button className='attempted'>8</button></li>
                    <li><button>9</button></li>
                    <li><button>10</button></li>
                    <li><button>11</button></li>
                    <li><button>12</button></li>
                    <li><button className='attempted'>13</button></li>
                    <li><button className='attempted'>14</button></li>
                    <li><button className='attempted'>15</button></li>
                    <li><button className='attempted'>16</button></li>
                    <li><button className='attempted'>17</button></li>
                    <li><button>18</button></li>
                    <li><button>19</button></li>
                    <li><button className='current'>20</button></li>
                    <li><button>21</button></li>
                    <li><button>22</button></li>
                    <li><button>23</button></li>
                    <li><button>24</button></li>
                    <li><button>25</button></li>
                    <li><button className='attempted'>26</button></li>
                    <li><button className='attempted'>27</button></li>
                    <li><button>28</button></li>
                    <li><button>29</button></li>
                    <li><button>30</button></li>
                  </ul>
                </div>
                  <div className='indicator'>
                    <ul>
                      <li className='current'><span></span> Current</li>
                      <li className='answered'><span></span> Answered</li>
                      <li><span></span> Not Attempted</li>
                    </ul>
                  </div>
              </div>
            </div>
            {/* right part end */}
          </div>
        </div>
        {/* Mock Test part end */}
      </div>
    </>
  )
}

export default TestStartExam