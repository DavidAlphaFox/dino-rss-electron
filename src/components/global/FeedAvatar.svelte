<script>
    export let feedImage
    export let feedId
    export let marginLeft = true

    const emojiList = "🌲,🤓,🤣,🍄,🥕,😺,🍃,‍🐯,🥰,🦦,🦒,💐,😨,🐦,😗,🐔,🤗,😶,🌶,👽,😸,🤬,🐋,🧄,🦈,🐵,😷,🐪,🐄,🐨,🥒,🐆,😾,🐭,🌹,🍏,🦁,🦌,🍅,😻,🥦,🦟,🤔,🤕,😣,👾,🍉,🐉,🐴,😟,🕷,🍋,🥳,🤨,🐖,🙊,🥑,👿,😵,🦖,😽,🐤,🍆,🐢,🦔,😄,🐹,🍎,🐈,👺,🤥,🦕,🐾,😖,🍈,🤯,🐮,😱,🦮,🦜,🍓,🐚,😭,🐂,🧅,🌾,🦄,🐛,😫,🌳,🐀,😰,🎍,😅,🥭,😠,🐼,🙁,🦥,🐻,🥬,🦎,🐍,🦋,🥀,🎄,😮,😊,😚,🤧,🍀,🐒,☘,🤢,🦚,😑,😙,🌻,🐐,🦇,🤭,🥺,🤩,🦂,🌷,🦙,🍑,😈,😓,🦝,🙃,🤡,😿,🐿,😒,🐕,🍁,😍,😳,😪,🥔,🦆,🦉,🥵,🍒,🧐,🌸,🐣,🤖,🙉,🦏,🍐,‍🐶,🐘,🌱,🐳,🐏,🎃,🌵,😕,🐬,🐠,😇,🥝,🦊,🌺,🥶,🐡,👹,🦍,😲,🐜,🤒,🙂,🐷,😋,🦡,🐫,😤,🦃,🤮,🦓,💩,😂,😉,🙀,🌽,🦨,😡,💀,🐺,🌼,🍊,🤫,😦,🤠,🐁,🐊,😁,🤑,🐸,😐,😢,🤪,😛,🦐,🦗,🦢,🦩,🎋,🌿,🐅,🐓,😘,🐱,🍠,🐞,🙈,😧,🥥,😯,🐃,🐲,🥱,🐑,🐰,🐎,🐌,😞,😹,😝,🍂,🦑,😬,😴,😎,😩,🍌,🐟,🕊,🥴,🐝,🙄,🦅,🦞,😏,🦀,😀,🤤,🐥,🐇,🐙,🍇,😼,🐽,🍍,🐩,🦛,😔,🦧,🐗,👻,🤐,😌,😥,🦘,🐧,😜,😆,😃,🌴".split(',')

    import { isWin } from '../utils/helper.js'

    function getEmoji(feedId) {
        return emojiList[feedId % emojiList.length]
    }
</script>

<style>
    .feed-avatar {
        min-width: 24px;
        width: 24px;
        height: 24px;
        margin-right: 6px;
        border-radius: 43%;
    }
    .feed-avatar-emoji {
        line-height: 24px;
        font-size: 24px;
    }
    .feed-avatar-emoji-win {
        font-size: 20px;
    }
    .feed-margin-left {
        margin-left: 12px;
    }
</style>

{#if feedImage}
    <img src="{feedImage}" class="feed-avatar {marginLeft ? 'feed-margin-left' : ''}" alt="" />
{:else}
    <span class="feed-avatar {marginLeft ? 'feed-margin-left' : ''} feed-avatar-emoji 
        {isWin() ? 'feed-avatar-emoji-win' : ''}">{getEmoji(feedId)}</span>
{/if}
