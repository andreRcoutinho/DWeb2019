<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema" exclude-result-prefixes="xs" version="2.0">
    <xsl:variable name="BasePath" select="'./'"/>
    <xsl:output method="xhtml" indent="yes" encoding="UTF-8"/>

    <xsl:template match="pr">
        <xsl:result-document href="pr.html">
            <html>
                <head>
                    <title>Project Record</title>
                    <meta charset="UTF8"/>
                    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
                </head>
                <body class="w3-margin">
                    <h1 align="center">Project Record</h1>
                    <hr/>
                    <xsl:apply-templates/>
                </body>
            </html>
        </xsl:result-document>
    </xsl:template>

    <xsl:template match="metadata">
        <table width="100%">
            <tr>
                <th>Key name: </th>
                <td>
                    <xsl:value-of select="keyname"/>
                </td>
                <th>Begin date: </th>
                <td>
                    <xsl:value-of select="bdate"/>
                </td>
            </tr>
            <tr>
                <th>Title: </th>
                <td>
                    <xsl:value-of select="title"/>
                </td>
                <th>End date: </th>
                <td>
                    <xsl:value-of select="edate"/>
                </td>
            </tr>
            <tr>
                <th>Subtitle: </th>
                <td>
                    <xsl:value-of select="subtitle"/>
                </td>
                <th>Supervisor: </th>
                <td>
                    <a>
                        <xsl:attribute name="href">
                            <xsl:value-of select="supervisor/@homepage"/>
                        </xsl:attribute>
                        <xsl:value-of select="supervisor"/>
                    </a>
                </td>
            </tr>
        </table>
        <hr/>
        <hr/>
    </xsl:template>

    <xsl:template match="workteam">
        <h3>Workteam</h3>
        <ol>
            <xsl:for-each select="worker">
                <li>
                    <xsl:value-of select="identifier"/> - <xsl:value-of select="name"/> -
                        <xsl:value-of select="email"/>
                </li>
            </xsl:for-each>
        </ol>
        <hr/>
        <hr/>
    </xsl:template>

    <xsl:template match="abstract">
        <h3>Abstract</h3>
        <xsl:apply-templates/>
        <hr/>
    </xsl:template>

    <xsl:template match="deliverables">
        <h3>Deliverables</h3>
        <ul>
            <xsl:for-each select="deliverable">
                <li>
                    <a>
                        <xsl:attribute name="href">
                            <xsl:value-of select="@path"/>
                        </xsl:attribute>
                        <xsl:value-of select="text()"/>
                    </a>
                </li>
            </xsl:for-each>
        </ul>
        <hr/>
    </xsl:template>

    <xsl:template match="p">
        <p>
            <xsl:apply-templates/>
        </p>
    </xsl:template>

    <xsl:template match="xref">
        <a>
            <xsl:attribute name="href">
                <xsl:value-of select="@url"/>
            </xsl:attribute>
            <xsl:value-of select="."/>
        </a>
    </xsl:template>


<!--STYLING-->
    <xsl:template match="b">
        <b>
            <xsl:value-of select="."/>
        </b>
    </xsl:template>
    
    <xsl:template match="i">
        <i>
            <xsl:value-of select="."/>
        </i>
    </xsl:template>
    
    <xsl:template match="b[descendant::xref]">
        <b>
            <a>
                <xsl:attribute name="href">
                    <xsl:value-of select="xref/@url"/>
                </xsl:attribute>
                <xsl:value-of select="xref"/>
            </a>
        </b>
    </xsl:template>
    
    <xsl:template match="b[descendant::i]">
        <b>
            <i>
                <xsl:value-of select="i"/>
            </i>
        </b>
    </xsl:template>

    <xsl:template match="b[descendant::i][descendant::xref]">
        <b>
            <i>
                <a>
                    <xsl:attribute name="href">
                        <xsl:value-of select="i/xref/@url"/>
                    </xsl:attribute>
                    <xsl:value-of select="i/xref"/>
                </a>
            </i>
        </b>
    </xsl:template>

    <xsl:template match="i[descendant::xref]">
        <i>
            <a>
                <xsl:attribute name="href">
                    <xsl:value-of select="xref/@url"/>
                </xsl:attribute>
                <xsl:value-of select="xref"/>
            </a>
        </i>
    </xsl:template>
    
    <xsl:template match="i[descendant::b]">
        <i>
            <b>
                <xsl:value-of select="b"/>
            </b>
        </i>
    </xsl:template>
    
    <xsl:template match="i[descendant::b][descendant::xref]">
        <i>
            <b>
                <a>
                    <xsl:attribute name="href">
                        <xsl:value-of select="b/xref/@url"/>
                    </xsl:attribute>
                    <xsl:value-of select="b/xref"/>
                </a>
            </b>
        </i>
    </xsl:template>

</xsl:stylesheet>
