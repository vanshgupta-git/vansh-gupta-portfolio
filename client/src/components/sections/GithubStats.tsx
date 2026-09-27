import React, { useEffect, useMemo, useState } from 'react'
import { GitHubCalendar } from 'react-github-calendar'

interface GitHubUser {
  name: string | null
  bio: string | null
  public_repos: number
  followers: number
  following: number
}

interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  language: string | null
  stargazers_count: number
  forks_count: number
  fork: boolean
}

type Status = 'loading' | 'success' | 'error'

interface Stat {
  label: string
  value: string | number
  icon: string
}

const GithubStats: React.FC = () => {
  const username = 'vanshgupta-git'

  const [user, setUser] = useState<GitHubUser | null>(null)
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [status, setStatus] = useState<Status>('loading')

  useEffect(() => {
    let cancelled = false

    const getGithubData = async () => {
      try {
        setStatus('loading')

        const [userRes, repoRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(
            `https://api.github.com/users/${username}/repos?per_page=100&sort=pushed`
          ),
        ])

        if (!userRes.ok || !repoRes.ok) {
          throw new Error(
            `GitHub API error (user: ${userRes.status}, repos: ${repoRes.status})`
          )
        }

        const userData: GitHubUser = await userRes.json()
        const repoData: GitHubRepo[] = await repoRes.json()

        if (cancelled) return

        setUser(userData)
        setRepos(Array.isArray(repoData) ? repoData : [])
        setStatus('success')
      } catch (error) {
        console.error(error)
        if (!cancelled) setStatus('error')
      }
    }

    getGithubData()

    return () => {
      cancelled = true
    }
  }, [])

  const { stars, forks, topLanguage, featuredRepos } = useMemo(() => {
    const stars = repos.reduce(
      (total, repo) => total + (repo.stargazers_count || 0),
      0
    )

    const forks = repos.reduce(
      (total, repo) => total + (repo.forks_count || 0),
      0
    )

    const languages: Record<string, number> = {}
    repos.forEach((repo) => {
      if (repo.language) {
        languages[repo.language] = (languages[repo.language] || 0) + 1
      }
    })

    const topLanguage =
      Object.entries(languages).sort((a, b) => b[1] - a[1])[0]?.[0] || 'N/A'

    const featuredRepos = repos
      .filter((repo) => !repo.fork)
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 4)

    return { stars, forks, topLanguage, featuredRepos }
  }, [repos])

  const stats: Stat[] = [
    { label: 'Repositories', value: user?.public_repos ?? '...', icon: '📁' },
    { label: 'Followers', value: user?.followers ?? '...', icon: '👥' },
    { label: 'Following', value: user?.following ?? '...', icon: '🔗' },
    { label: 'Stars', value: stars, icon: '⭐' },
    { label: 'Forks', value: forks, icon: '🍴' },
    { label: 'Top Language', value: topLanguage, icon: '💻' },
  ]

  if (status === 'error') {
    return (
      <section id="github" className="w-full bg-black text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            GitHub <span className="text-blue-500">Activity</span>
          </h2>
          <p className="text-gray-400">
            Couldn't load GitHub data right now — this is usually a rate
            limit on unauthenticated API requests. Please try again shortly,
            or{' '}
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline"
            >
              view the profile directly
            </a>
            .
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="github" className="w-full bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-3">
            Open Source
          </p>
          <h2 className="text-7xl md:text-7xl  font-hero">
            GitHub <span className="text-blue-500">Activity</span>
          </h2>
          <p className="text-gray-400 mt-4">
            My coding activity, repositories and open-source contributions.
          </p>
        </div>

        {/* Profile */}
        <div className="bg-[#020617] border border-gray-800 rounded-2xl p-6 mb-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <img
                src={`https://github.com/${username}.png`}
                alt={`${username} GitHub avatar`}
                className="w-20 h-20 rounded-full border-2 border-blue-500"
              />
              <div>
                <h3 className="text-xl font-bold">
                  {user?.name || 'Vansh Gupta'}
                </h3>
                <p className="text-gray-400">@{username}</p>
                <p className="text-gray-500 text-sm mt-1">
                  {user?.bio || 'Computer Science Undergraduate'}
                </p>
              </div>
            </div>

            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-white text-black rounded-full font-medium hover:bg-blue-500 hover:text-white transition"
            >
              View GitHub →
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#020617] border border-gray-800 rounded-2xl p-5 hover:border-blue-500 transition"
            >
              <div className="text-2xl mb-3">{stat.icon}</div>
              <p className="text-2xl font-bold">
                {status === 'loading' ? (
                  <span className="inline-block w-10 h-6 bg-gray-800 rounded animate-pulse" />
                ) : (
                  stat.value
                )}
              </p>
              <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Contribution Grid */}
        <div className="bg-[#020617] border border-gray-800 rounded-2xl p-6 mb-6 overflow-x-auto">
          <h3 className="text-xl font-bold mb-2">Contribution Activity</h3>
          <p className="text-gray-500 text-sm mb-6">
            My GitHub contributions over the past year.
          </p>

          <div className="min-w-[700px]">
            <GitHubCalendar
              username={username}
              colorScheme="dark"
              blockSize={12}
              blockMargin={4}
              fontSize={13}
            />
          </div>
        </div>

        {/* Streak */}
        <div className="bg-[#020617] border border-gray-800 rounded-2xl p-6 mb-6">
          <h3 className="text-xl font-bold mb-2">🔥 Contribution Streak</h3>
          <p className="text-gray-500 text-sm mb-6">
            Consistency in coding and contributions.
          </p>

          <img
            src={`https://streak-stats.demolab.com/?user=${username}&hide_border=true&theme=transparent&background=020617`}
            alt="GitHub contribution streak stats"
            className="w-full"
            loading="lazy"
          />
        </div>

        {/* Repositories */}
        <div className="bg-[#020617] border border-gray-800 rounded-2xl p-6">
          <h3 className="text-xl font-bold mb-6">Featured Repositories</h3>

          {status === 'loading' ? (
            <div className="grid md:grid-cols-2 gap-4">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="border border-gray-800 rounded-xl p-5 h-28 bg-gray-900/40 animate-pulse"
                />
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-4">
              {featuredRepos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-800 rounded-xl p-5 hover:border-blue-500 transition"
                >
                  <h4 className="font-semibold text-lg">{repo.name}</h4>
                  <p className="text-gray-500 text-sm mt-2">
                    {repo.description || 'No description available.'}
                  </p>
                  <div className="flex gap-4 mt-4 text-sm text-gray-500">
                    <span>{repo.language || 'Code'}</span>
                    <span>⭐ {repo.stargazers_count}</span>
                    <span>🍴 {repo.forks_count}</span>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Button */}
        <div className="text-center mt-10">
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-7 py-3 bg-blue-600 rounded-full font-medium hover:bg-blue-500 transition"
          >
            Explore My GitHub →
          </a>
        </div>
      </div>
    </section>
  )
}

export default GithubStats