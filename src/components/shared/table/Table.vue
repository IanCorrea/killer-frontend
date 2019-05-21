<template>
<div>

    <div class="limiter">
		<div class="container-table">
			<div class="wrap-table">				
                <table>
                    <thead>
                        <tr>
                            <th>Suspeito</th>
                            <th>Arma</th>
                            <th>Local</th>
                        </tr>    
                    </thead>
                    <tbody>
                            <tr>
                            <td>
                                <slot name="content-1"></slot>
                            </td>
                            <td>
                                <slot name="content-2" ></slot>           
                            </td>
                            <td>
                                <slot name="content-3" ></slot>           
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

</div>
</template>

<script>
export default {}
</script>

<style lang="sass">

    @import './Table.scss';
    
</style>