import { Helmet } from "react-helmet";

const Blog = () => {
  return (
    <div className="max-w-[85rem] mx-auto py-28">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog - Career Connects</title>
      </Helmet>
      <div>
        <h1 className="text-3xl font-bold text-center">Blog</h1>
      </div>
      <div className="pt-10 flex flex-col gap-10">
        <h2 className="text-2xl font-semibold underline text-center">
          Access Token and Refresh Token
        </h2>
        <p>
          An access token is a tiny piece of code that contains a large amount
          of data. Information about the user, permissions, groups, and
          timeframes is embedded within one token that passes from a server to a
          user's device.
        </p>
        <p>
          A refresh token is a special key that enables a client for an API or
          service to retrieve new access tokens without requiring the user to
          perform a complete login. In other words, an application can exchange
          a valid refresh token for a new access token.
        </p>
        <h2 className="text-2xl font-semibold underline text-center">
          Where to store them?
        </h2>
        <p>
          As with most sensitive token types, there are arguments for either
          using cookies or local storage. Cookies are low-effort to implement,
          automatically time out (not that you should rely on this to perform a
          security function!), and the risk of CSRF is lesser with refresh than
          with other tokens (it allows the attacker to extend a session the user
          might expect to have timed out, which is bad and you probably should
          have some anti-CSRF mechanism, but it's not really a problem unless
          some attacker can also do something undesirable with that extended
          session). The network utilization cost can even be mitigated by
          setting the cookie's path property if you want.
          <br />
          <br />
          However, storing refresh tokens in local storage and then submitting
          them using non-cookie headers (e.g. Authorization as a Bearer token,
          or a dedicated custom header) or putting the token in the request body
          is also fine. Its main security weakness is that XSS could steal the
          token, but even with an HttpOnly-flagged cookie, an attacker with XSS
          could still extend the session repeatedly until a user explicitly
          logged off or the attacker lost access to the victim's browser for
          long enough that the token expired, and also many XSS attacks can be
          fast enough that the session won't need refreshing.
        </p>
        <h2 className="text-2xl font-semibold underline text-center">
          What is Express JS?
        </h2>
        <p>
          Express is a node js web application framework that provides broad
          features for building web and mobile applications. It is used to build
          a single page, multipage, and hybrid web application.
          <br />
          <br />
          It's a layer built on the top of the Node js that helps manage servers
          and routes.
        </p>
        <h2 className="text-2xl font-semibold underline text-center">
          What is Nest JS?
        </h2>
        <p>
          Nest (NestJS) is a framework for building efficient, scalable Node.js
          server-side applications. It uses progressive JavaScript, is built
          with and fully supports TypeScript (yet still enables developers to
          code in pure JavaScript) and combines elements of OOP (Object Oriented
          Programming), FP (Functional Programming), and FRP (Functional
          Reactive Programming).
          <br />
          <br />
          Under the hood, Nest makes use of robust HTTP Server frameworks like
          Express (the default) and optionally can be configured to use Fastify
          as well!
          <br />
          <br />
          Nest provides a level of abstraction above these common Node.js
          frameworks (Express/Fastify), but also exposes their APIs directly to
          the developer. This gives developers the freedom to use the myriad of
          third-party modules which are available for the underlying platform.
        </p>
      </div>
    </div>
  );
};

export default Blog;
