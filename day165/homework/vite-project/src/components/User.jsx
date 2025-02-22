import octocat from "../images/octocat.png"

const User = ({ color, data }) => {
    const [githubData, setGithubData] = data

    const obj = {
        name: "The Octocat",
        userName: "octocat",
        joinDate: "Joined 25 Jan 2011",
        bio: "This profile has no bio",
        repos: 8,
        followers: 3938,
        following: 9,
        location: "San Francisco",
        link: "https://github.blog",
        twitter: "Not available",
        git: "@github"
    }
    const joinDate = new Date(githubData.created_at);

    console.log(githubData)
    return (
        <div id="userInfo">





            {githubData.length === 0 ? (

                <div className="default">
                    <h2>{obj.name}</h2>
                    <p>@{obj.userName}</p>
                    <img id="octocat" src={octocat} alt="" />
                    <p>{obj.bio}</p>
                    <p>Repos</p>
                    <h4>{obj.repos}</h4>
                    <p>Followers</p>
                    <h4>{obj.followers}</h4>
                    <p>Following</p>
                    <h4>{obj.following}</h4>

                </div>

            ) : (
                <div className="data">
                    <div id="info1">
                        <img id="avatar" src={githubData.avatar_url} alt="" />
                        <div id="total">

                            <div id="userName">
                                <span>
                                    <h2>{githubData.login}</h2>
                                    <p>@{githubData.name}</p>
                                </span>

                                <h4>Joined {`${joinDate.getDate().toString()}/ ${joinDate.getMonth() + 1}/ ${joinDate.getFullYear()}`}</h4>

                            </div>




                            <p>{githubData.bio}</p>
                        </div>
                    </div>


                    {/* repos */}
                    <div id="section">
                        <div id="accInfo">
                            <p>Repositories: {githubData.public_repos}</p>
                            <p>Followers</p>
                            <p>{githubData.followers}</p>
                            <p>Following</p>
                            <p>{githubData.following}</p>
                        </div>


                        {/* location */}
                        <h4>{githubData.location}</h4>
                        <h4>{githubData.twitter_username === null ? "Not available" : githubData.twitter_username}</h4>
                        <a href={githubData.html_url}>{githubData.html_url}</a>
                        <h4>@{githubData.name}</h4>
                    </div>

                </div>


            )}

        </div>
    )

}


export default User