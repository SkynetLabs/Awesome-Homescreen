# Awesome Homescreen ![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)

A collection of [Homescreen](https://docs.siasky.net/integrations/homescreen)  Awesomeness

|                      Application                      |                                                                                   Add To Homescreen                                                                                   | Description                                                                                         |
| :---------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------- |
|  [HackerPaste](https://github.com/harej/hackerpaste)  | [![Add to Homescreen](https://siasky.net/CADKZ7bTyVRjMmyMnEsUKDidqdmdaNHaJP25cp_3YGQlkg)](https://homescreen.hns.siasky.net/#/skylink/_AGCc4-wHTEscwQXTox_95VsHjl-GEwrc7rxGhMXCPStRg) | Is a one-of-a-kind text snippet sharing tool, secure by design and built for the decentralized web. |
|        [Rift](https://github.com/riftdweb/rift)       | [![Add to Homescreen](https://siasky.net/CADKZ7bTyVRjMmyMnEsUKDidqdmdaNHaJP25cp_3YGQlkg)](https://homescreen.hns.siasky.net/#/skylink/EAD7S3bPStozkTtNtzPwFZ2flVP8r2ZXsfyk31Uw4DdOvA) | Decentralized workspace with file editing, social feeds, video streaming, and more.                 |
| [SkyGallery](https://github.com/Delivator/SkyGallery) | [![Add to Homescreen](https://siasky.net/CADKZ7bTyVRjMmyMnEsUKDidqdmdaNHaJP25cp_3YGQlkg)](https://homescreen.hns.siasky.net/#/skylink/AQBj5IcVxgwD4uXJTYC2RqA65daWMNyIDwzif-elDRfuag) | Media gallery that allows users to share pictures and videos.                                       |
|    [SkySend](https://github.com/redsolver/skysend)    | [![Add to Homescreen](https://siasky.net/CADKZ7bTyVRjMmyMnEsUKDidqdmdaNHaJP25cp_3YGQlkg)](https://homescreen.hns.siasky.net/#/skylink/AQDikuO5szw9nTHZvvm0jT_iwRIJ74UqyvReNwHePAkqBQ) | Secure, private way to send and share files.                                                        |
|  [SkyTransfer](https://github.com/kamy22/skytransfer) | [![Add to Homescreen](https://siasky.net/CADKZ7bTyVRjMmyMnEsUKDidqdmdaNHaJP25cp_3YGQlkg)](https://homescreen.hns.siasky.net/#/skylink/AQAJGCmM4njSUoFx-YNm64Zgea8QYRo-kHHf3Vht04mYBQ) | Minimal but powerful file sharing platform with AES encryption.                                     |
## Resources

- [Adding Homescreen support to your app](https://docs.siasky.net/integrations/homescreen/adding-homescreen-support-to-an-app)
- [Resolver Skylinks](https://docs.siasky.net/skynet-topics/resolver-skylinks#web-tools)

## Contributions

Thanks for your interest in Homescreen!

When contributing, please keep in mind the following guidelines:

- One project per pull request.
- New apps should be added to [apps.json](./src/apps.json), **DO NOT** edit README directly, README is generated automatically by github actions.
- Apps must be projects built to support Homescreen, including a resolver skylink in their Manifest that matches the resolver skylink of the Add to Homescreen link.
- Github links should match the author/builder of the application and support Homescreen by maintaining an official resolver skylink.
- Include a meaningful pull request description.
- Keep the project description short and simple without skimping on the important details.
- Projects should be organized in ascending alphanumeric order i.e. a-z, 0-9.
- End the description with a full stop/period.
- Check that your text editor is set to remove trailing whitespace.

## Pull Request Template

Please use the following format:

`[PROJECT NAME](LINK TO REPO)|[![Add to Homescreen](https://siasky.net/CADKZ7bTyVRjMmyMnEsUKDidqdmdaNHaJP25cp_3YGQlkg)](https://homescreen.hns.siasky.net/#/skylink/RESOLVER SKYLINK)|DESCRIPTION.`
