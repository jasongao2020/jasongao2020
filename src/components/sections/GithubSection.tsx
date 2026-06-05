import Section from "../layout/Section";
import Container from "../layout/Container";
import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";
import Button from "../ui/Button";
import GithubStats from "./GithubStats";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  updated_at: string;
};

async function getGithubData() {
  const headers: Record<string, string> = { Accept: "application/vnd.github+json" };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const [userRes, reposRes] = await Promise.all([
    fetch("https://api.github.com/users/jasongao2020", { headers, next: { revalidate: 3600 } }),
    fetch("https://api.github.com/users/jasongao2020/repos?sort=updated&per_page=6", { headers, next: { revalidate: 3600 } }),
  ]);

  if (!userRes.ok) return null;

  const user = await userRes.json();
  const repos: Repo[] = reposRes.ok ? await reposRes.json() : [];

  return { user, repos };
}

export default async function GithubSection() {
  const data = await getGithubData();

  if (!data) {
    return (
      <Section id="github">
        <Container>
          <SectionHeader
            eyebrow="09 · GitHub"
            eyebrowVariant="accent"
            title="我的开源"
          />
          <p className="text-[var(--muted)]">GitHub 数据加载失败，请稍后重试。</p>
        </Container>
      </Section>
    );
  }

  const { user, repos } = data;

  return (
    <Section id="github">
      <Container>
        <SectionHeader
          eyebrow="09 · GitHub"
          eyebrowVariant="accent"
          title="我的开源"
          lead="代码是最好的简历"
        />

        {/* 个人信息卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--gap-lg)] mb-[var(--gap-lg)]">
          {/* 头像 + 基本信息 */}
          <div className="md:col-span-1">
            <Card>
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-24 h-24 border-[length:var(--border-width)] border-[var(--fg)] mx-auto"
              />
              <h3 className="text-center mt-4 !text-xl">{user.name || user.login}</h3>
              {user.bio && (
                <p className="text-[var(--muted)] text-center text-sm mt-2 m-0">{user.bio}</p>
              )}
              {user.location && (
                <p className="font-mono text-xs text-center text-[var(--muted)] mt-2 m-0">
                  📍 {user.location}
                </p>
              )}
              <div className="flex justify-center gap-[var(--gap-md)] mt-4">
                <Button href={user.html_url} variant="primary" arrow>
                  GitHub 主页
                </Button>
              </div>
            </Card>
          </div>

          {/* 统计数据 + 仓库列表 */}
          <div className="md:col-span-2">
            {/* 统计数字 */}
            <GithubStats
              stats={[
                { label: "仓库", value: user.public_repos },
                { label: "关注者", value: user.followers },
                { label: "正在关注", value: user.following },
              ]}
            />

            {/* 仓库列表 */}
            {repos.length > 0 && (
              <div className="space-y-[var(--gap-sm)]">
                {repos.map((repo) => (
                  <a key={repo.id} href={repo.html_url} target="_blank" rel="noopener noreferrer">
                    <Card className="!p-4 !shadow-none hover:!shadow-[var(--shadow-hard-sm)] hover:!translate-x-[-1px] hover:!translate-y-[-1px]">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="!text-[15px] !font-bold m-0">
                          📁 {repo.name}
                        </h4>
                        <div className="flex items-center gap-3 shrink-0">
                          {repo.language && (
                            <span className="text-xs text-[var(--muted)]">{repo.language}</span>
                          )}
                          {repo.stargazers_count > 0 && (
                            <span className="text-xs text-[var(--muted)]">
                              ⭐ {repo.stargazers_count}
                            </span>
                          )}
                        </div>
                      </div>
                      {repo.description && (
                        <p className="text-sm text-[var(--muted)] mt-1 m-0 line-clamp-1">
                          {repo.description}
                        </p>
                      )}
                    </Card>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
