<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema" exclude-result-prefixes="xs" version="2.0">

    <xsl:output method="xhtml" encoding="UTF-8" indent="yes"/>

    <xsl:template match="/">
        <xsl:result-document href="website/index.html">
            <html>
                <head>
                    <title>Arqueossítios do Nordeste Português</title>
                    <meta charset="UTF8"/>
                    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/> 
                </head>
                <body>
                    <h1>Arqueossítios do Nordeste Português</h1>
                    <ul class="w3-ul w3-hoverable">
                        <xsl:apply-templates mode="indice"/>
                    </ul>
                </body>
            </html>
        </xsl:result-document>
        <xsl:apply-templates/>
    </xsl:template>
    
    <xsl:template match="ARQELEM" mode="indice">
        <li>
            <a name="{generate-id()}"/>
            <!-- anchor -->
            <a href="arqelem-{generate-id()}.html">
                <xsl:value-of select="IDENTI, DESCRI" separator="- "/>
            </a>
        </li>
    </xsl:template>

    <xsl:template match="ARQELEM">
        <xsl:result-document href="website/arqelem-{generate-id()}.html">
            <html>
                <head>
                    <title>Arqueossítios do Nordeste Português</title>
                    <meta charset="UTF8"/>
                    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/> 
                </head>
                <body>
                    <table class="w3-table w3-bordered w3-card-4">
                        <tr>
                            <th class="w3-center w3-light-gray">Lugar</th>
                            <td>
                                <xsl:value-of select="LUGAR"/>
                            </td>
                        </tr>
                        <tr>
                            <th class="w3-center w3-light-gray">Contexto temporal</th>
                            <td>
                                <xsl:value-of select="CRONO"/>
                            </td>
                        </tr>
                        <tr>
                            <th class="w3-center w3-light-gray">Freguesia</th>
                            <td>
                                <xsl:value-of select="FREGUE"/>
                            </td>
                        </tr>
                        <tr>
                            <th class="w3-center w3-light-gray">Concelho</th>
                            <td>
                                <xsl:value-of select="CONCEL"/>
                            </td>
                        </tr>
                        <tr>
                            <th class="w3-center w3-light-gray">Latitude</th>
                            <td>
                                <xsl:value-of select="LATITU"/>
                            </td>
                        </tr>
                        <tr>
                            <th class="w3-center w3-light-gray">Longitude</th>
                            <td>
                                <xsl:value-of select="LONGIT"/>
                            </td>
                        </tr>
                        <tr>
                            <th class="w3-center w3-light-gray">Altitude</th>
                            <td>
                                <xsl:value-of select="ALTITU"/>
                            </td>
                        </tr>
                        <tr>
                            <th class="w3-center w3-light-gray">Acesso</th>
                            <td>
                                <xsl:value-of select="ACESSO"/>
                            </td>
                        </tr>
                        <tr>
                            <th class="w3-center w3-light-gray">QUADRO</th>
                            <td>
                                <xsl:value-of select="QUADRO"/>
                            </td>
                        </tr>
                        <tr>
                            <th class="w3-center w3-light-gray">Trabalhos arqueológicos</th>
                            <td>
                                <xsl:value-of select="TRAARQ"/>
                            </td>
                        </tr>
                        <tr>
                            <th class="w3-center w3-light-gray">DESARQ</th>
                            <td>
                                <xsl:value-of select="DESARQ"/>
                            </td>
                        </tr>
                        <tr>
                            <th class="w3-center w3-light-gray">INTERP</th>
                            <td>
                                <xsl:value-of select="INTERP"/>
                            </td>
                        </tr>
                        <tr>
                            <th class="w3-center w3-light-gray">BIBLIO</th>
                            <td>
                                <xsl:value-of select="BIBLIO"/>
                            </td>
                        </tr>
                        <tr>
                            <th class="w3-center w3-light-gray">Autor</th>
                            <td>
                                <xsl:value-of select="AUTOR"/>
                            </td>
                        </tr>
                        <tr>
                            <th class="w3-center w3-light-gray">Data</th>
                            <td>
                                <xsl:value-of select="DATA"/>
                            </td>
                        </tr>
                    </table>
                    <br/>
                    <address>
                        <a href="index.html#{generate-id()}">Voltar à página principal</a>
                    </address>
                </body>
            </html>
        </xsl:result-document>
    </xsl:template>

</xsl:stylesheet>
