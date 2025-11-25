import React from 'react'

const SearchBox = () => {
  return (
    <>
      {/* search part start */}
      <aside className="course-search-aside bg-gray">
        {/* course search form */}
        <form className="container course-search-form">
          <label className="element-block text-center font-lato">
            Search For Course
          </label>
          <div className="form-holder">
            <div className="form-row">
              <div className="form-group">
                <select
                  data-placeholder="Category"
                  className="form-control"
                >
                  <option value={0}>Category</option>
                  <option value={0}>Category</option>
                  <option value={0}>Category</option>
                </select>
              </div>
              <div className="form-group">
                <select
                  data-placeholder="Course Cost"
                  className="form-control"
                >
                  <option value={0}>Course Cost</option>
                  <option value={0}>Course Cost</option>
                  <option value={0}>Course Cost</option>
                </select>
              </div>
              <div className="form-group">
                <select
                  data-placeholder="Search Text"
                  className="form-control"
                >
                  <option value={0}>Search Text</option>
                  <option value={0}>Search Text</option>
                  <option value={0}>Search Text</option>
                </select>
              </div>
            </div>
            <button
              type="button"
              className="btn btn-theme btn-warning no-shrink text-uppercase"
            >
              Search
            </button>
          </div>
        </form>
      </aside>
      {/* search part end */}

      {/* categories part start */}
      <aside
        className="bg-cover categories-aside text-center"
        style={{ backgroundImage: "url(./assets/images/img14.jpg)" }}
      >
        <div className="container holder">
          {/* categories list */}
          <ul className="list-unstyled categories-list">
            <li>
              <a href="#">
                <div className="align">
                  <span className="icn-wrap">
                    <img
                      src="assets/images/icon04.svg"
                      width={43}
                      height={43}
                      alt="image description"
                    />
                  </span>
                  <strong className="h h5 element-block text-uppercase">
                    Business
                  </strong>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="align">
                  <span className="icn-wrap">
                    <img
                      src="assets/images/icon05.svg"
                      width={44}
                      height={48}
                      alt="image description"
                    />
                  </span>
                  <strong className="h h5 element-block text-uppercase">
                    Language
                  </strong>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="align">
                  <span className="icn-wrap">
                    <img
                      src="assets/images/icon06.svg"
                      width={51}
                      height={42}
                      alt="image description"
                    />
                  </span>
                  <strong className="h h5 element-block text-uppercase">
                    Programming
                  </strong>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="align">
                  <span className="icn-wrap">
                    <img
                      src="assets/images/icon07.svg"
                      width={51}
                      height={42}
                      alt="image description"
                    />
                  </span>
                  <strong className="h h5 element-block text-uppercase">
                    Film &amp; Video
                  </strong>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="align">
                  <span className="icn-wrap">
                    <img
                      src="assets/images/icon08.svg"
                      width={51}
                      height={39}
                      alt="image description"
                    />
                  </span>
                  <strong className="h h5 element-block text-uppercase">
                    Photography
                  </strong>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="align">
                  <span className="icn-wrap">
                    <img
                      src="assets/images/icon09.svg"
                      width={51}
                      height={51}
                      alt="image description"
                    />
                  </span>
                  <strong className="h h5 element-block text-uppercase">
                    Web Design
                  </strong>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </aside>
      {/* categories part end */}
    </>
  )
}

export default SearchBox